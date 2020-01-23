import React from 'react';
import Globe from './Globe';
import { 
    Ion,
    Viewer,
    Cesium3DTileset,
    ScreenSpaceEventHandler,
    ScreenSpaceEventType,
    Cartographic,
    Math,
    HorizontalOrigin,
    VerticalOrigin,
    Cartesian2
} from 'cesium';
import { CesiumToken } from '../config/config';

class App extends React.Component {

    constructor(props) {
        super(props);

        Ion.defaultAccessToken = CesiumToken;

        this.state = {
            viewer: null,
            cesiumContainerId: 'cesiumContainer'
        };
    }

    componentDidMount() {
        const {
            cesiumContainerId
        } = this.state;

        const viewer = new Viewer(cesiumContainerId, {
            skyAtmosphere : false,
        });

        let tileset = new Cesium3DTileset({
            url: 'http://localhost:3000/tilesets//py3dtiles/tileset.json',
            debugShowBoundingVolume: false
        });

        // viewer.scene.logarithmicDepthBuffer = false;
        // viewer.scene.globe.depthTestAgainstTerrain = true;
        viewer.scene.globe.enableLighting = false
        viewer.scene.globe.showGroundAtmosphere = false;
        viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;

        viewer.scene.primitives.add(tileset);


        // Mouse over the globe to see the cartographic position
        let entity = viewer.entities.add({
            label : {
                show : false,
                showBackground : true,
                font : '14px monospace',
                horizontalOrigin : HorizontalOrigin.LEFT,
                verticalOrigin : VerticalOrigin.TOP,
                pixelOffset : new Cartesian2(15, 0),
                disableDepthTestDistance : Number.POSITIVE_INFINITY // draws the label in front of terrain
            }
        });
        let handler = new ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(function(movement) {
            // Show lat, lon, height
            let cartesian = viewer.scene.pickPosition(movement.endPosition);
            if (cartesian) {
                let cartographic = Cartographic.fromCartesian(cartesian);
                let longitudeString = Math.toDegrees(cartographic.longitude).toFixed(4);
                let latitudeString = Math.toDegrees(cartographic.latitude).toFixed(4);
                let heightString = cartographic.height.toFixed(4);

                entity.position = cartesian;
                entity.label.show = true;
                entity.label.text =
                    'Lon: ' + ('   ' + longitudeString) + '\u00B0' +
                    '\nLat: ' + ('   ' + latitudeString) + '\u00B0' + 
                    '\nAlt: ' + ('   ' + heightString) + 'm';
            } else {
                entity.label.show = false;
            }
        }, ScreenSpaceEventType.MOUSE_MOVE);

        // viewer.extend(viewerCesium3DTilesInspectorMixin);

        viewer.flyTo(tileset, {duration : 0});

        this.setState({
            viewer: viewer
        });
    }

    render() {
        const {
            cesiumContainerId,
            viewer,
        } = this.state;

        return (
            <React.Fragment>
                <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
            </React.Fragment>
        );
    }
}

export default App;