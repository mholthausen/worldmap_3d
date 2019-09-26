# CesiumJS 3D Demo-Client

[![Build Status](https://travis-ci.com/mholthausen/3d_demo_client.svg?branch=master)](https://travis-ci.com/mholthausen/3d_demo_client)

## Requirements

- [x] Setting up the Node.Js (10.16.1 LTS) and React.Js (^16.8.6) environment

- [x] Integration of the latest version of the [CesiumJS](https://cesiumjs.org/) framework at the time of development (Version 1.59)

- [ ] Integration into a Docker environment

- [ ] Loading the 3D city model of Cologne, Germany into the application. Source: [offenedaten-koeln.de](https://www.offenedaten-koeln.de/dataset/3d-stadtmodell-koeln-0)

  - See KIT links
  - [https://github.com/3dcitydb/3dcitydb-web-map](https://github.com/3dcitydb/3dcitydb-web-map)
  - [https://groups.google.com/forum/#!topic/cesium-dev/Jkga8_8tPWA](https://groups.google.com/forum/#!topic/cesium-dev/Jkga8_8tPWA)
  - [https://github.com/sushrut141/Cesium-WebFeatureService](https://github.com/sushrut141/Cesium-WebFeatureService)

- [ ] Slot a start screen (e.g. picture of Cologne Cathedral) in ahead

- [ ] Zoom to Cologne Cathedral after startup

- [ ] Provide a selection of different tools (have to be defined in detail)

- [ ] When zooming to Cologne Cathedral, the CesiumJS Viewer is overlaid by an interior view of the cathedral (possibly [BabyolnJS](https://www.babylonjs.com/)) with which an interior view is displayed in the entrance area

- [ ] Publishing of the application on [demo.terrestris.de](https://demo.terrestris.de/)

**Note:** Further requirements may arise in the course of the project and will be added to this list.

## Plannning

The purpose of this application is a short demonstration of possibilities and a selection of applications in the 3D context.

## Start

Start the app with

`npm install` followed by `npm run start`
