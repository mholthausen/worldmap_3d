import React from 'react';
import Globe from './Globe';
import Photobox from './Photobox';
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
} from '../config/config';

class App extends React.Component {
  constructor(props) {
    super(props);

    Ion.defaultAccessToken = cesiumToken;

    this.state = {
      viewer: null,
      cesiumContainerId: 'cesiumContainer',
      photoboxContainerId: 'photoboxContainer',
      displayPhotobox: false
    };

    this.togglePhotobox = this.togglePhotobox.bind(this);
    this.loadOrthophoto = this.loadOrthophoto.bind(this);
    this.openPhotoboxHandler = this.openPhotoboxHandler.bind(this);
  }

  componentDidMount() {
    const { cesiumContainerId } = this.state;
    const extent = Rectangle.fromDegrees(6.95222, 50.93508, 6.96479, 50.94738);
    const dataSourcePromise = CzmlDataSource.load(czml_cgn_cathedral);
    Camera.DEFAULT_VIEW_RECTANGLE = extent;
    Camera.DEFAULT_VIEW_FACTOR = 0;

    // load DGM of Cologne city as terrain provider
    const viewer = new Viewer(cesiumContainerId, {
      terrainProvider: new CesiumTerrainProvider({
        url: IonResource.fromAssetId(18022)
      }),
      ...viewerConfig
    });

    viewer.imageryLayers.addImageryProvider(this.loadOrthophoto());
    viewer.dataSources.add(dataSourcePromise);

    if (viewer.scene) {
      this.openPhotoboxHandler(viewer.scene);
    }

    this.setState({
      viewer: viewer
    });
  }

  openPhotoboxHandler(scene) {
    const { displayPhotobox } = this.state;
    const handler = new ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction((evtObj) => {
      let picked = scene.pick(evtObj.position);
      if (
        picked.id &&
        picked.id instanceof Entity &&
        picked.id.id === 'babylonIdCologneCathedral'
      ) {
        this.setState({
          displayPhotobox: !displayPhotobox
        });
      }
    }, ScreenSpaceEventType.LEFT_CLICK);
  }

  loadOrthophoto() {
    return new WebMapServiceImageryProvider(wms_nw_dop);
  }

  togglePhotobox() {
    const { displayPhotobox } = this.state;

    this.setState({
      displayPhotobox: !displayPhotobox
    });
  }

  render() {
    const {
      cesiumContainerId,
      photoboxContainerId,
      displayPhotobox,
      viewer
    } = this.state;

    const pbClassName = `${!displayPhotobox ? ' no-display' : ''}`;

    return (
      <React.Fragment>
        <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
        <div id="mdiv" className={pbClassName} onClick={this.togglePhotobox}>
          <div className="mdiv">
            <div className="md"></div>
          </div>
        </div>
        <Photobox
          photoboxContainerId={photoboxContainerId}
          viewer={viewer}
          displayPhotobox={displayPhotobox}
        />
      </React.Fragment>
    );
  }
}

export default App;
