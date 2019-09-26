import React from 'react';
import Globe from './Globe';
import Cesium from 'cesium/Cesium';
import { CesiumToken } from '../config/config';

class App extends React.Component {

    constructor(props) {
        super(props);

        Cesium.Ion.defaultAccessToken = CesiumToken;

        this.state = {
            viewer: null,
            cesiumContainerId: 'cesiumContainer'
        };
    }

    componentDidMount() {
        const {
            cesiumContainerId
        } = this.state;

        var extent = Cesium.Rectangle.fromDegrees(6.95222, 50.93508, 6.96479, 50.94738);
        Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
        Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

        const viewer = new Cesium.Viewer(cesiumContainerId, {
        });

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
            <React.Fragment >
                <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
            </React.Fragment >
        );
    }
}

export default App;