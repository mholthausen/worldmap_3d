# CesiumJS 3D Demo-Client

## Requirements

- [x] Setting up the Node.Js (10.16.1 LTS) and React.Js (^16.8.6) environment

- [x] Integration of the latest version of the [CesiumJS](https://cesiumjs.org/) framework at the time of development (Version 1.59)

- [ ] Integration into a Docker environment

- [ ] Loading the 3D city model of Cologne, Germany into the application

- [ ] Slot a start screen (e.g. picture of Cologne Cathedral) in ahead

- [ ] Zoom to Cologne Cathedral after startup

- [ ] Provide a selection of different tools (have to be defined in detail)

- [ ] When zooming to Cologne Cathedral, the CesiumJS Viewer is overlaid by an interior view of the cathedral (possibly [BabyolnJS](https://www.babylonjs.com/)) with which an interior view is displayed in the entrance area

- [ ] Publishing of the application on [demo.terrestris.de](https://demo.terrestris.de/)

**Note:** Further requirements may arise in the course of the project and will be added to this list.

## Plannning

The purpose of this application is a short demonstration of possibilities and a selection of applications in the 3D context.

## Running the app

First, build the app by

```bash
docker build --rm -t ddd_viewer -f docker/3d_viewer/Dockerfile .
```

then uses the following command to run the app:

```bash
$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
```
