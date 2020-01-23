# CesiumJS 3D Demo-Client

[![Build Status](https://travis-ci.com/mholthausen/3d_demo_client.svg?branch=master)](https://travis-ci.com/mholthausen/3d_demo_client)

## Requirements

## Git LFS

* Install GIT LFS
see also [https://git-lfs.github.com/](https://git-lfs.github.com/) [1]

  * Direct setup of the sources list via packagecloud:  
  `curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash`
  * Setup  
  `apt install git-lfs`

* Setup of the cloned repo (as also described in [1])
  * Switch to the repo in the terminal (which must first be checked out as usual).  
  `git lfs install`

* Fetch the linked LFS files  
`git lfs fetch origin master`
`git lfs checkout` (start download of the LFS files to the local repo)

* [x] Setting up the Node.Js (10.16.1 LTS) and React.Js (^16.8.6) environment

* [x] Integration of the latest version of the [CesiumJS](https://cesiumjs.org/) framework at the time of development (Version 1.59)

* [ ] ~~Integration into a Docker environment~~

* [ ] Loading the 3D city model of Cologne, Germany into the application. Source: [offenedaten-koeln.de](https://www.offenedaten-koeln.de/dataset/3d-stadtmodell-koeln-0)

  * See KIT links
  * [https://github.com/3dcitydb/3dcitydb-web-map](https://github.com/3dcitydb/3dcitydb-web-map)
  * [https://groups.google.com/forum/#!topic/cesium-dev/Jkga8_8tPWA](https://groups.google.com/forum/#!topic/cesium-dev/Jkga8_8tPWA)
  * [https://github.com/sushrut141/Cesium-WebFeatureService](https://github.com/sushrut141/Cesium-WebFeatureService)

* [ ] Slot a start screen (e.g. picture of Cologne Cathedral) in ahead

* [ ] Zoom to Cologne Cathedral after startup

* [ ] Provide a selection of different tools (have to be defined in detail)

* [ ] When zooming to Cologne Cathedral, the CesiumJS Viewer is overlaid by an interior view of the cathedral (possibly [BabyolnJS](https://www.babylonjs.com/)) with which an interior view is displayed in the entrance area

* [ ] Publishing of the application on [demo.terrestris.de](https://demo.terrestris.de/)

**Note:** Further requirements may arise in the course of the project and will be added to this list.

## Plannning

The purpose of this application is a short demonstration of possibilities and a selection of applications in the 3D context.

## Start

Start the app with

`npm install` followed by `npm run start`
