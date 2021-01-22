# CesiumJS 3D Demo-Client

[![Build Status](https://travis-ci.com/mholthausen/3d_demo_client.svg?branch=master)](https://travis-ci.com/mholthausen/3d_demo_client)
[![Known Vulnerabilities](https://snyk.io/test/github/mholthausen/3d_demo_client/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mholthausen/3d_demo_client?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/104d45c34d81fac02423/maintainability)](https://codeclimate.com/github/mholthausen/3d_demo_client/maintainability)
[![Dependencies Status](https://david-dm.org/mholthausen/3d_demo_client.svg)](https://david-dm.org/mholthausen/3d_demo_client)
[![devDependencies Status](https://david-dm.org/mholthausen/3d_demo_client/dev-status.svg)](https://david-dm.org/mholthausen/3d_demo_client?type=dev)

## Requirements

-   [x] Setting up the Node.Js (14.15.4 LTS) and React.Js (^17.0.1) environment

-   [x] Integration of the latest version of the [CesiumJS](https://cesiumjs.org/) framework at the time of development (Version 1.77)

-   [x] Loading the 3D city model of Cologne, Germany as [CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)

-   [x] Zoom to Cologne Cathedral after startup

-   [ ] Provide a selection of different tools (have to be defined in detail)

-   [x] When clicking the red dot near Cologne Cathedral, the CesiumJS Viewer is overlaid ( with [BabyolnJS](https://www.babylonjs.com/)) to show an exterior view of the entrance area

-   [ ] Release the application on [demo.terrestris.de](https://demo.terrestris.de/)

**Note:** Further requirements may arise in the course of the project and will be added to this list.

## Plannning

The purpose of this application is a short demonstration of possibilities and a selection of applications in the 3D context.

## Start

Start the app with

`npm install` followed by `npm run start`
