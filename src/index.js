import Cesium from 'cesium/Cesium';
import express from 'express';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


import 'cesium/Widgets/widgets.css';
import './css/main.css';

var viewer = new Cesium.Viewer('cesiumContainer');

// App
const app = express();
app.get('/', (req, res) => {
  res.send(viewer);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
