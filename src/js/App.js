import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Globe from './Globe';
import Photobox from './Photobox';
import Toolbar from './Toolbar';
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
  Entity
} from 'cesium';
import {
  cesiumToken,
  viewerConfig,
  wms_nw_dop,
  czml_cgn_cathedral
} from '../config';
import { show } from './store/showPhotobox';

/**
 * Bundles the App
 */
function App() {
  const dispatch = useDispatch();
  Ion.defaultAccessToken = cesiumToken;

  const [viewer, setViewer] = useState(null);
  const [cesiumContainerId] = useState('cesiumContainer');
  const [photoboxContainerId] = useState('photoboxContainer');

  /**
   * Runs when the component did mount
   */
  useEffect(() => {
    const extent = Rectangle.fromDegrees(6.95222, 50.93508, 6.96479, 50.94738);
    const dataSourcePromise = CzmlDataSource.load(czml_cgn_cathedral);
    Camera.DEFAULT_VIEW_RECTANGLE = extent;
    Camera.DEFAULT_VIEW_FACTOR = 0;

    // load DGM of Cologne city as terrain provider
    const viewer = new Viewer(cesiumContainerId, {
      terrainProvider: new CesiumTerrainProvider({
        url: IonResource.fromAssetId(273803)
      }),
      ...viewerConfig
    });

    viewer.imageryLayers.addImageryProvider(loadOrthophoto());
    viewer.dataSources.add(dataSourcePromise);

    if (viewer.scene) {
      openPhotoboxHandler(viewer.scene);
    }

    setViewer(viewer);
    dispatch(show(false));
  }, []);

  /**
   * Sets up the left click event handler
   *
   * @param {Object} scene
   */
  const openPhotoboxHandler = (scene) => {
    const handler = new ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction((evtObj) => {
      let picked = scene.pick(evtObj.position);
      if (
        picked &&
        picked.id &&
        picked.id instanceof Entity &&
        picked.id.id === 'babylonIdCologneCathedral'
      ) {
        dispatch(show(true));
      }
    }, ScreenSpaceEventType.LEFT_CLICK);
  };

  /**
   * Returns the DOP WMS of NRW
   */
  const loadOrthophoto = () => {
    return new WebMapServiceImageryProvider(wms_nw_dop);
  };

  return (
    <React.Fragment>
      <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
      <Photobox photoboxContainerId={photoboxContainerId} viewer={viewer} />
      <Toolbar viewer={viewer}></Toolbar>
    </React.Fragment>
  );
}

export default App;
