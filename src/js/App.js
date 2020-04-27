import React from "react";
import Globe from "./Globe";
import {
    Ion,
    Camera,
    Rectangle,
    Viewer,
    IonResource,
    CesiumTerrainProvider
} from "cesium";
import { CesiumToken } from "../config/config";

class App extends React.Component {
    constructor(props) {
        super(props);

        Ion.defaultAccessToken = CesiumToken;

        this.state = {
            viewer: null,
            cesiumContainerId: "cesiumContainer",
        };
    }

    componentDidMount() {
        const { cesiumContainerId } = this.state;

        var extent = Rectangle.fromDegrees(
            6.95222,
            50.93508,
            6.96479,
            50.94738
        );
        Camera.DEFAULT_VIEW_RECTANGLE = extent;
        Camera.DEFAULT_VIEW_FACTOR = 0;

        const viewer = new Viewer(cesiumContainerId, {
            terrainProvider: new CesiumTerrainProvider({
                url: IonResource.fromAssetId(18022),
            }),
        });

        this.setState({
            viewer: viewer,
        });
    }

    render() {
        const { cesiumContainerId, viewer } = this.state;

        return (
            <React.Fragment>
                <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
            </React.Fragment>
        );
    }
}

export default App;
