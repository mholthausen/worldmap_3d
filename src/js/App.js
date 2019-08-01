import React from 'react';
import Globe from './Globe';
import Cesium from 'cesium/Cesium';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            viewer: null,
            cesiumContainerId: 'cesiumContainer'
        };
    }

    componentDidMount() {
        const {
            cesiumContainerId
        } = this.state;

        const viewer = new Cesium.Viewer(cesiumContainerId, {
        });

        let center = Cesium.Cartesian3.fromDegrees(6.958307, 50.941357);
        viewer.camera.lookAt(center, new Cesium.Cartesian3(0, 0, 1000.0));

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