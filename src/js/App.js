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