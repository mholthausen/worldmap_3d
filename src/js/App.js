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
import { CesiumToken } from '../config/config';

class App extends React.Component {
  constructor(props) {
    super(props);

    Ion.defaultAccessToken = CesiumToken;

    this.state = {
      viewer: null,
      cesiumContainerId: 'cesiumContainer',
      photoboxContainerId: 'photoboxContainer',
      displayPhotobox: false
    };

    this.togglePhotobox = this.togglePhotobox.bind(this);
  }

  componentDidMount() {
    const { cesiumContainerId, displayPhotobox } = this.state;

    const extent = Rectangle.fromDegrees(6.95222, 50.93508, 6.96479, 50.94738);
    Camera.DEFAULT_VIEW_RECTANGLE = extent;
    Camera.DEFAULT_VIEW_FACTOR = 0;

    // load DGM of Cologne city as terrain provider
    const viewer = new Viewer(cesiumContainerId, {
      terrainProvider: new CesiumTerrainProvider({
        url: IonResource.fromAssetId(18022)
      }),
      geocoder: true,
      skyAtmosphere: false,
      shouldAnimate: false,
      animation: true,
      baseLayerPicker: false,
      fullscreenButton: false,
      homeButton: true,
      infoBox: false,
      sceneModePicker: true,
      selectionIndicator: true,
      navigationHelpButton: true,
      imageryProvider: false,
      skyBox: false
    });

    // load NRW orthophoto
    const provider = new WebMapServiceImageryProvider({
      url: 'https://www.wms.nrw.de/geobasis/wms_nw_dop',
      layers: 'nw_dop_rgb',
      parameters: {
        format: 'image/png'
      }
    });

    viewer.imageryLayers.addImageryProvider(provider);

    const czml = [
      {
        id: 'document',
        name: 'Location of Photobox',
        version: '1.0'
      },
      {
        id: 'babylonIdCologneCathedral',
        name: 'Cologne Cathedral',
        position: {
          cartographicDegrees: [6.9568, 50.941287, 105.0]
        },
        ellipsoid: {
          radii: {
            cartesian: [5.0, 5.0, 5.0]
          },
          fill: true,
          material: {
            solidColor: {
              color: {
                rgba: [255, 0, 0, 255]
              }
            }
          }
        }
      }
    ];

    const dataSourcePromise = CzmlDataSource.load(czml);
    viewer.dataSources.add(dataSourcePromise);

    if (viewer.scene) {
      const handler = new ScreenSpaceEventHandler(viewer.scene.canvas);
      handler.setInputAction((evtObj) => {
        let picked = viewer.scene.pick(evtObj.position);
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

    this.setState({
      viewer: viewer
    });
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
