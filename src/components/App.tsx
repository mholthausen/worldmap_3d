import React, { useState, useEffect } from "react";
import Globe from "./Globe.tsx";
import Photobox from "./Photobox.tsx";
import Toolbar from "./Toolbar.tsx";
import FeatureInfoBox, { FeatureInfoData } from "./FeatureInfoBox.tsx";
import {
  Ion,
  Camera,
  Rectangle,
  Viewer,
  WebMapServiceImageryProvider,
  CzmlDataSource,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Entity,
  Cartesian3,
  JulianDate,
  ClockRange,
  Model,
  Transforms,
  Color,
  ColorBlendMode,
  ImageryLayer,
  Clock,
  Scene,
  Cesium3DTileset,
  CesiumTerrainProvider,
  Cesium3DTileStyle,
} from "cesium";
import {
  cesiumToken,
  viewerConfig,
  wms_nw_dop,
  czml_cgn_cathedral,
  tunnelsFile,
  wms_dwd_radar,
  terrainFile,
  tilesetUrl
} from "../config.ts";
import { show } from "./store/showPhotobox.ts";
import { useAppDispatch } from "../hooks";
import { fetchFeatureDetails, checkApiHealth } from "../services/featureService.ts";

/**
 * Bundles the App
 */
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  Ion.defaultAccessToken = cesiumToken;

  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [cesiumContainerId] = useState<string>("cesiumContainer");
  const [photoboxContainerId] = useState<string>("photoboxContainer");
  const [tileset, setTileset] = useState<Cesium3DTileset | null>(null);
  const [tilesetStylingEnabled, setTilesetStylingEnabled] = useState<boolean>(false);

  // State for custom FeatureInfoBox
  const [featureInfoVisible, setFeatureInfoVisible] = useState<boolean>(false);
  const [featureInfoData, setFeatureInfoData] = useState<FeatureInfoData | null>(null);

  function roundJulianDateTo5Minutes(julianDate: JulianDate): JulianDate {
    const date = JulianDate.toDate(julianDate);
    const ms = date.getTime();
    const roundedMs = Math.floor(ms / (5 * 60 * 1000)) * 5 * 60 * 1000;
    const roundedDate = new Date(roundedMs);
    return JulianDate.fromDate(roundedDate);
  }

  /**
   * Handle tileset styling toggle
   */
  const handleTilesetStyling = (enabled: boolean): void => {
    setTilesetStylingEnabled(enabled);

    if (tileset) {
      if (enabled) {
        // Apply styling: divide feature_id 1-2844910 into 4 categories
        // Use Number() to convert feature_id to number for comparison
        const style = new Cesium3DTileStyle({
          color: {
            conditions: [
              ["Number(${feature_id}) >= 1 && Number(${feature_id}) <= 711227", "color('#FF0000')"], // Red for 1-711227
              ["Number(${feature_id}) >= 711228 && Number(${feature_id}) <= 1422455", "color('#00FF00')"], // Green for 711228-1422455
              ["Number(${feature_id}) >= 1422456 && Number(${feature_id}) <= 2133683", "color('#0000FF')"], // Blue for 1422456-2133683
              ["Number(${feature_id}) >= 2133684 && Number(${feature_id}) <= 2844910", "color('#FFFF00')"], // Yellow for 2133684-2844910
              ["true", "color('#FFFFFF')"] // White fallback for any other values
            ]
          }
        });
        tileset.style = style;
      } else {
        // Remove styling
        tileset.style = undefined;
      }
    }
  };

  /**
   * Runs when the component did mount
   */
  useEffect(() => {
    let viewer: Viewer | null = null;
    let radarImageryLayer: ImageryLayer | null = null;
    let lastTimeStr = "";
    let tickHandler: ((clock: Clock) => void) | null = null;

    const run = async () => {
      const today = JulianDate.now();
      const start = JulianDate.addDays(today, -1, new JulianDate());

      const extent = Rectangle.fromDegrees(
        6.95222,
        50.93508,
        6.96479,
        50.94738,
      );
      const dataSourcePromise = CzmlDataSource.load(czml_cgn_cathedral);
      Camera.DEFAULT_VIEW_RECTANGLE = extent;
      Camera.DEFAULT_VIEW_FACTOR = 0;

      viewer = new Viewer(cesiumContainerId, {
        terrainProvider: await CesiumTerrainProvider.fromUrl(
          terrainFile
        ),
        ...viewerConfig,
      });

      viewer.timeline.zoomTo(start, today);
      viewer.clock.startTime = start;
      viewer.clock.stopTime = today;
      viewer.clock.currentTime = today;
      viewer.clock.multiplier = 70;
      viewer.clock.clockRange = ClockRange.LOOP_STOP;
      viewer.scene.globe.depthTestAgainstTerrain = true;
      viewer.scene.globe.showGroundAtmosphere = false;

      tickHandler = (clock: Clock) => {
        const rounded = roundJulianDateTo5Minutes(clock.currentTime);
        const timeStr = JulianDate.toIso8601(rounded);

        if (timeStr !== lastTimeStr) {
          lastTimeStr = timeStr;

          const newProvider = new WebMapServiceImageryProvider({
            url: wms_dwd_radar.url,
            layers: wms_dwd_radar.layers,
            parameters: {
              ...wms_dwd_radar.parameters,
              TIME: timeStr,
            },
          });

          if (radarImageryLayer) {
            viewer!.imageryLayers.remove(radarImageryLayer, true);
          }

          radarImageryLayer =
            viewer!.imageryLayers.addImageryProvider(newProvider);
          viewer!.imageryLayers.raiseToTop(radarImageryLayer);
          viewer!.scene.requestRender();
        }
      };

      viewer.clock.onTick.addEventListener(tickHandler);

      const longitude = 6.953101;
      const latitude = 50.935173;
      const height = -500.0;
      const position = Cartesian3.fromDegrees(longitude, latitude, height);
      const modelMatrix = Transforms.eastNorthUpToFixedFrame(position);
      // Example tunnels taken from Cesium Sandcastle
      // https://sandcastle.cesium.com/?src=Underground%20Color.html

      Model.fromGltfAsync({
        url: tunnelsFile,
        modelMatrix,
        scale: 1.0,
        color: Color.WHITE,
        colorBlendMode: ColorBlendMode.MIX,
      }).then((model) => {
        viewer!.scene.primitives.add(model);
      });

      // Load the test tileset
      try {
        const loadedTileset = await Cesium3DTileset.fromUrl(tilesetUrl);
        viewer.scene.primitives.add(loadedTileset);
        setTileset(loadedTileset);

        console.log('Test tileset loaded successfully');
      } catch (error) {
        console.error('Failed to load test tileset:', error);
      }      viewer.imageryLayers.addImageryProvider(loadOrthophoto());
      viewer.dataSources.add(dataSourcePromise);

      if (viewer.scene) {
        viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
        openPhotoboxHandler(viewer.scene);
        setupTilesetClickHandler(viewer.scene);
      }

      setViewer(viewer);
      dispatch(show(false));
    };

    run();

    return () => {
      if (viewer && !viewer.isDestroyed()) {
        if (tickHandler) {
          viewer.clock.onTick.removeEventListener(tickHandler);
        }
      }
    };
  }, [dispatch]);

  /**
   * Sets up the left click event handler
   */
  const openPhotoboxHandler = (scene: Scene) => {
    const handler = new ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction((evtObj: ScreenSpaceEventHandler.PositionedEvent) => {
      let picked = scene.pick(evtObj.position);
      if (
        picked &&
        picked.id &&
        picked.id instanceof Entity &&
        picked.id.id === "babylonIdCologneCathedral"
      ) {
        dispatch(show(true));
      }
    }, ScreenSpaceEventType.LEFT_CLICK);
  };

  /**
   * Sets up the click handler for 3D Tilesets to extract feature_id and show custom InfoBox
   */
  const setupTilesetClickHandler = (scene: Scene) => {
    const handler = new ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction((evtObj: ScreenSpaceEventHandler.PositionedEvent) => {
      const picked = scene.pick(evtObj.position);

      // Check if we clicked on a 3D tileset feature
      if (picked && picked.primitive instanceof Cesium3DTileset) {

        // The picked object is a Cesium3DTileFeature with direct featureId property
        const feature = picked;

        // Try to get feature_id from properties first, fallback to featureId
        const propertyFeatureId = feature.getProperty('feature_id');
        const featureId = propertyFeatureId !== undefined ? propertyFeatureId : feature.featureId;

        if (featureId !== undefined) {
          // Show initial custom InfoBox with loading state
          setFeatureInfoData({
            featureId,
            loading: true
          });
          setFeatureInfoVisible(true);

          // Query feature details and update InfoBox
          queryFeatureDetails(featureId);

        } else {
          console.log('No featureId found on the picked feature');
          console.log('Available properties:', Object.keys(feature));
        }
      } else {
        console.log('Not a 3D Tileset feature or no primitive found');
        // Close InfoBox when clicking elsewhere
        setFeatureInfoVisible(false);
      }
    }, ScreenSpaceEventType.LEFT_CLICK);
  };

  /**
   * Query feature details from database using feature_id and update custom InfoBox
   */
  const queryFeatureDetails = async (featureId: string | number | bigint) => {
    try {
      // Check if API is available
      const healthCheck = await checkApiHealth();
      if (!healthCheck.available) {
        console.warn('Backend API is not available. Feature details cannot be fetched.');
        console.log('Make sure the backend server is running on http://localhost:3001');

        // Update custom InfoBox with API error
        setFeatureInfoData({
          featureId,
          loading: false,
          error: 'Make sure the backend server is running on http://localhost:3001',
          apiError: true
        });
        return;
      }

      // Fetch feature details from backend
      const result = await fetchFeatureDetails(featureId);

      if (result.success && result.data) {
        // Update custom InfoBox with successful data
        setFeatureInfoData({
          featureId,
          databaseData: result.data,
          loading: false
        });

      } else {
        console.log('Feature not found or error occurred:');
        console.log('Error:', result.error);
        console.log('Message:', result.message);

        // Update custom InfoBox with database error
        setFeatureInfoData({
          featureId,
          loading: false,
          error: result.message || result.error || 'Unknown database error'
        });
      }

    } catch (error) {
      console.error('Error querying feature details:', error);

      // Update custom InfoBox with unexpected error
      setFeatureInfoData({
        featureId,
        loading: false,
        error: 'Unexpected error occurred. Check browser console for details.'
      });
    }
  };

  /**
   * Returns the DOP WMS of NRW
   */
  const loadOrthophoto = (): WebMapServiceImageryProvider => {
    return new WebMapServiceImageryProvider(wms_nw_dop);
  };

  return (
    <React.Fragment>
      <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
      <Photobox photoboxContainerId={photoboxContainerId} viewer={viewer} />
      <Toolbar
        viewer={viewer}
        tilesetStylingEnabled={tilesetStylingEnabled}
        onTilesetStylingChange={handleTilesetStyling}
      />
      <FeatureInfoBox
        visible={featureInfoVisible}
        onClose={() => setFeatureInfoVisible(false)}
        featureInfo={featureInfoData}
      />
    </React.Fragment>
  );
};

export default App;
