# Worldmap 3D Demo-Client

[![Build Status](https://github.com/mholthausen/worldmap_3d/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/mholthausen/worldmap_3d/actions?query=workflow%3A%22Build+and+Deploy%22)
[![Known Vulnerabilities](https://snyk.io/test/github/mholthausen/worldmap_3d/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mholthausen/worldmap_3d?targetFile=package.json)

## Requirements

- [x] Setting up the NodeJS (at least 22.17.1 LTS) and React.Js (19.1.0) environment

- [x] Integration of the latest version of the [CesiumJS](https://cesiumjs.org/) framework at the time of development (Version 1.131.0)

- [x] Loading the 3D city model of Cologne, Germany as [CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)

- [x] Zoom to Cologne Cathedral after startup

- [ ] Provide a selection of different tools (have to be defined in detail)

- [x] When clicking the red dot near Cologne Cathedral, the CesiumJS Viewer is overlaid ( with [BabyolnJS](https://www.babylonjs.com/)) to show an exterior view of the entrance area

- [x] Integration of an underground object in the Cologne city area, here as example tunnels taken from [Cesium Sandcastle](https://sandcastle.cesium.com/?src=Underground%20Color.html)

- [x] Release the application on [demo.terrestris.de](https://demo.terrestris.de/)

**Note:** Further requirements may arise in the course of the project and will be added to this list.

## Plannning

The purpose of this application is a short demonstration of possibilities and a selection of applications in the 3D context.

## Start by npm

Start the app with

```sh
npm install
npm run dev
```

For the built, production version

```sh
npm run build
npm run preview
```

Navigate to [localhost:5173](http://localhost:5173). For the built version navigate to [localhost:4173](http://localhost:4173).

## Start build by docker

`docker build -t nexus.terrestris.de/mholthausen/worldmap_3d .`  
`docker run -p 8080:80 nexus.terrestris.de/mholthausen/worldmap_3d`  
open [http://localhost:8080](http://localhost:8080)
