import React, { useState, useEffect } from "react";
import Globe from "./Globe.tsx";
import Photobox from "./Photobox.tsx";
import Toolbar from "./Toolbar.tsx";
import {
  Ion,
  Camera,
  Rectangle,
  Viewer,
  IonResource,
  CesiumTerrainProvider,
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
} from "cesium";
import {
  cesiumToken,
  viewerConfig,
  wms_nw_dop,
  czml_cgn_cathedral,
  tunnelsFile,
  wms_dwd_radar,
} from "../config.ts";
import { show } from "./store/showPhotobox.ts";
import { useAppDispatch } from "../hooks";

/**
 * Bundles the App
 */
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  Ion.defaultAccessToken = cesiumToken;

  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [cesiumContainerId] = useState<string>("cesiumContainer");
  const [photoboxContainerId] = useState<string>("photoboxContainer");

  function roundJulianDateTo5Minutes(julianDate: JulianDate): JulianDate {
    const date = JulianDate.toDate(julianDate);
    const ms = date.getTime();
    const roundedMs = Math.floor(ms / (5 * 60 * 1000)) * 5 * 60 * 1000;
    const roundedDate = new Date(roundedMs);
    return JulianDate.fromDate(roundedDate);
  }

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
          IonResource.fromAssetId(273803),
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

      viewer.imageryLayers.addImageryProvider(loadOrthophoto());
      viewer.dataSources.add(dataSourcePromise);

      if (viewer.scene) {
        viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
        openPhotoboxHandler(viewer.scene);
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
   * Returns the DOP WMS of NRW
   */
  const loadOrthophoto = (): WebMapServiceImageryProvider => {
    return new WebMapServiceImageryProvider(wms_nw_dop);
  };

  return (
    <React.Fragment>
      <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
      <Photobox photoboxContainerId={photoboxContainerId} viewer={viewer} />
      <Toolbar viewer={viewer} />
    </React.Fragment>
  );
};

export default App;
