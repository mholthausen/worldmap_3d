/** 
import {
  Cartesian3,
  Math as CesiumMath,
  Terrain,
  Viewer,
  createOsmBuildingsAsync,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: CesiumMath.toRadians(0.0),
    pitch: CesiumMath.toRadians(-15.0),
  },
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
createOsmBuildingsAsync().then((buildingTileset) => {
  viewer.scene.primitives.add(buildingTileset);
});
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./js/store/index.js";

import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";
import "antd/dist/reset.css";

import App from "./js/App.jsx";
import Footer from "./js/Footer.jsx";

import { customer } from "./config.js";

document.title = customer.title;

const root = ReactDOM.createRoot(document.getElementById("root"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

root.render(
  <Provider store={store}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </Provider>,
);

footer.render(<Footer />);
