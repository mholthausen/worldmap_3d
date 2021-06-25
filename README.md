# CesiumJS 3D Demo-Client

[![Build Status](https://github.com/mholthausen/worldmap_3d/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/mholthausen/worldmap_3d/actions?query=workflow%3A%22Build+and+Deploy%22)
[![Known Vulnerabilities](https://snyk.io/test/github/mholthausen/worldmap_3d/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mholthausen/worldmap_3d?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/104d45c34d81fac02423/maintainability)](https://codeclimate.com/github/mholthausen/worldmap_3d/maintainability)
[![Dependencies Status](https://david-dm.org/mholthausen/worldmap_3d.svg)](https://david-dm.org/mholthausen/worldmap_3d)
[![devDependencies Status](https://david-dm.org/mholthausen/worldmap_3d/dev-status.svg)](https://david-dm.org/mholthausen/worldmap_3d?type=dev)

## Requirements

- [x] Setting up the Node.Js (14.15.4 LTS) and React.Js (17.0.2) environment

- [x] Integration of the latest version of the [CesiumJS](https://cesiumjs.org/) framework at the time of development (Version 1.82.1)

- [x] Loading the 3D city model of Cologne, Germany as [CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)

- [x] Zoom to Cologne Cathedral after startup

- [ ] Provide a selection of different tools (have to be defined in detail)

- [x] When clicking the red dot near Cologne Cathedral, the CesiumJS Viewer is overlaid ( with [BabyolnJS](https://www.babylonjs.com/)) to show an exterior view of the entrance area

- [x] Release the application on [demo.terrestris.de](https://demo.terrestris.de/)

**Note:** Further requirements may arise in the course of the project and will be added to this list.

## Plannning

The purpose of this application is a short demonstration of possibilities and a selection of applications in the 3D context.

## Start by npm

Start the app with

`npm install` followed by `npm run start`. The site can be accessed via [localhost:3000](http://localhost:3000).

## Start build by docker

`docker build -t nexus.terrestris.de/mholthausen/worldmap_3d .`  
`docker run -p 8080:80 nexus.terrestris.de/mholthausen/worldmap_3d`  
open [http://localhost:8080](http://localhost:8080)
