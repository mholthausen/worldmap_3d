import React from 'react';
import Globe from './Globe';
import {
    Ion,
    Viewer,
    Cesium3DTileset,
    ScreenSpaceEventHandler,
    ScreenSpaceEventType,
    Cartographic,
    Math,
    HorizontalOrigin,
    VerticalOrigin,
    Cartesian2,
    Cartesian3,
    Cesium3DTileStyle,
    viewerCesium3DTilesInspectorMixin,
    Cesium3DTileFeature,
    BoundingSphere,
    HeadingPitchRange,
    Matrix3,
    Matrix4,
    HeadingPitchRoll,
    ClippingPlaneCollection,
    ClippingPlane,
    Transforms,
    JulianDate,
    Color,
    ClassificationType,
    DirectionalLight,
    Material,
    createWorldTerrain,
    Credit,
    Rectangle,
    RectangleGeometry,
    ImageMaterialProperty,
    Primitive,
    GeometryInstance,
    EllipsoidSurfaceAppearance,
    PolygonHierarchy
} from 'cesium';
import { CesiumToken } from '../config/config';

class App extends React.Component {

    constructor(props) {
        super(props);

        Ion.defaultAccessToken = CesiumToken;

        this.state = {
            viewer: null,
            cesiumContainerId: 'cesiumContainer'
        };

        this.addTileset = this.addTileset.bind(this);
        this.computeTransform = this.computeTransform.bind(this)
        this.computeTransforms = this.computeTransforms.bind(this)
    }

    computeTransforms(tileset) {
        console.log('in function')
        console.log(tileset)
        var t = tileset.root;
        console.log(t);
        var transformToRoot = defined(t.transform) ? Matrix4.fromArray(t.transform) : Matrix4.IDENTITY;

        this.computeTransform(t, transformToRoot);
    }

    computeTransform(tile, transformToRoot) {
        // Apply 4x4 transformToRoot to this tile's positions and bounding volumes

        var inverseTransform = Matrix4.inverse(transformToRoot, new Matrix4());
        var normalTransform = Matrix4.getRotation(inverseTransform, new Matrix3());
        normalTransform = Matrix3.transpose(normalTransform, normalTransform);
        // Apply 3x3 normalTransform to this tile's normals

        var children = tile.children;
        var length = children.length;
        for (var i = 0; i < length; ++i) {
            var child = children[i];
            var childToRoot = defined(child.transform) ? Matrix4.fromArray(child.transform) : Matrix4.clone(Matrix4.IDENTITY);
            childToRoot = Matrix4.multiplyTransformation(transformToRoot, childToRoot, childToRoot);
            this.computeTransform(child, childToRoot);
        }
    }

    /**
     * Adds a tileset to the viewer
     *
     * @param {String} url_
     * @param {Double} heightOffset
     * @param {Cesium.Viewer} viewer
     */
    addTileset(url_, heightOffset = 0.0, viewer) {
        let tileset_ = viewer.scene.primitives.add(new Cesium3DTileset({
            url: url_,
            maximumScreenSpaceError: 1,
            skipLevelOfDetail: false,
            debugShowBoundingVolume: true
        }));

        tileset_.readyPromise.then(function (tileset) {
            // Position tileset

            let boundingSphere = tileset.boundingSphere;
            let cartographic = Cartographic.fromCartesian(boundingSphere.center);
            let surface = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
            let offset = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
            let translation = Cartesian3.subtract(offset, surface, new Cartesian3());
            tileset.modelMatrix = Matrix4.fromTranslation(translation);
            let t = tileset.root;
            console.log(surface);
            let matrix = Transforms.eastNorthUpToFixedFrame(surface);
            console.log(matrix)
            t.transform = matrix;

            tileset.style = new Cesium3DTileStyle({
                color: {
                    conditions: [
                        ['true', 'rgb(127, 59, 8)']
                    ]
                }
            });
        });
        return tileset_;
    }

    componentDidMount() {
        const {
            cesiumContainerId
        } = this.state;

        let worldTerrain = createWorldTerrain({
            requestWaterMask: true,
            requestVertexNormals: true
        });

        const viewer = new Viewer(cesiumContainerId, {
            // terrainProvider: worldTerrain,
            // globe: false,
            timeline: false,
            animation: false,
            baseLayerPicker: true,
            fullscreenButton: false,
            geocoder: false,
            homeButton: true,
            sceneModePicker: false,
            scene3DOnly: false,
            shadows: false
        });
        // viewer.scene.logarithmicDepthBuffer = false;
        // viewer.scene.globe.depthTestAgainstTerrain = true;
        // viewer.scene.globe.enableLighting = false
        // viewer.scene.globe.showGroundAtmosphere = false;
        viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
        // viewer.scene.frameState.creditDisplay.destroy();

        viewer.extend(viewerCesium3DTilesInspectorMixin);

        //viewer.baseLayerPicker.viewModel.selectedImagery = viewer.baseLayerPicker.viewModel.imageryProviderViewModels[9];
        viewer.entities.removeAll();

        // let rectangle = viewer.scene.primitives.add(new Primitive({
        //     geometryInstances: new GeometryInstance({
        //         geometry: new RectangleGeometry({
        //             rectangle: Rectangle.fromDegrees(13, 52, 14, 53),
        //             vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT
        //         })
        //     }),
        //     appearance: new EllipsoidSurfaceAppearance({
        //         aboveGround: false
        //     })
        // }));

        // rectangle.appearance.material = new Material({
        //     fabric: {
        //         type: 'Image',
        //         uniforms: {
        //             image: '../images/pic.jpg'
        //         }
        //     }
        // });

        // let tileset = this.addTileset('http://localhost:3000/tilesets/top_Upper_Buntsandstein_1909_05/tileset.json',0, viewer);
        // let tileset = this.addTileset('http://localhost:3000/tilesets/top_Upper_Buntsandstein_1909_10/tileset.json',0, viewer);
        // let tileset = this.addTileset('http://localhost:3000/tilesets/1909/tileset.json', 0, viewer);
        let tileset = this.addTileset('http://localhost:3000/tilesets/py3dtiles/tileset.json', 0, viewer);

        // let polygon = viewer.entities.add({
        //     polygon : {
        //         hierarchy : new PolygonHierarchy(Cartesian3.fromDegreesArray([13, 53, 14, 53, 14, 52, 13, 52])),
        //         material : Color.RED.withAlpha(0.5),
        //         classificationType : ClassificationType.CESIUM_3D_TILE
        //         // classificationType : ClassificationType.BOTH
        //         // classificationType : ClassificationType.TERRAIN
        //     }
        // });

        // polygon.polygon.material = '../images/pic.jpg';

        // Mouse over the globe to see the cartographic position
        // let entity = viewer.entities.add({
        //     label: {
        //         show: false,
        //         showBackground: true,
        //         font: '14px monospace',
        //         horizontalOrigin: HorizontalOrigin.LEFT,
        //         verticalOrigin: VerticalOrigin.TOP,
        //         pixelOffset: new Cartesian2(15, 0),
        //         disableDepthTestDistance: Number.POSITIVE_INFINITY // draws the label in front of terrain
        //     }
        // });
        // let handler = new ScreenSpaceEventHandler(viewer.scene.canvas);
        // handler.setInputAction(function (movement) {
        //     tileset.style = new Cesium3DTileStyle({
        //         color: {
        //             conditions: [
        //                 ['true', 'rgb(0, 0, 255)']
        //             ]
        //         }});
        //     // Show lat, lon, height
        //     let cartesian = viewer.scene.pickPosition(movement.endPosition);
        //     let feature = viewer.scene.pick(movement.endPosition);
        //     if (feature instanceof Cesium3DTileFeature) {
        //         let propertyNames = feature.getPropertyNames();
        //         let length = propertyNames.length;
        //         for (let i = 0; i < length; ++i) {
        //             let propertyName = propertyNames[i];
        //             console.log(propertyName + ': ' + feature.getProperty(propertyName));
        //         }
        //     }
            // if (cartesian) {
            //     let cartographic = Cartographic.fromCartesian(cartesian);
            //     let longitudeString = Math.toDegrees(cartographic.longitude).toFixed(4);
            //     let latitudeString = Math.toDegrees(cartographic.latitude).toFixed(4);
            //     let heightString = cartographic.height.toFixed(4);

            //     entity.position = cartesian;
            //     entity.label.show = true;
            //     entity.label.text =
            //         'Lon: ' + ('   ' + longitudeString) + '\u00B0' +
            //         '\nLat: ' + ('   ' + latitudeString) + '\u00B0' +
            //         '\nAlt: ' + ('   ' + heightString) + 'm';
            // } else {
            // entity.label.show = false;
            // }
        // }, ScreenSpaceEventType.MOUSE_MOVE);

        viewer.zoomTo(tileset)
            .otherwise(function (error) {
                console.log(error);
            });

        // var position = Cartographic.toCartesian(new Cartographic.fromDegrees(13.4027, 52.5173, 100));
        // var distance = 30000.0;
        // var boundingSphere = new BoundingSphere(position, distance);

        // viewer.camera.viewBoundingSphere(boundingSphere, new HeadingPitchRange(0, -1.5, 0));
        // let initialPosition = new Cartesian3.fromRadians(0.2339212437, 0.9165997993, 100);
        // let initialOrientation = new HeadingPitchRoll.fromDegrees(0, -90, 0);
        // let homeCameraView = {
        //     destination: initialPosition,
        //     orientation: {
        //         heading: initialOrientation.heading,
        //         pitch: initialOrientation.pitch,
        //         roll: initialOrientation.roll
        //     }
        // };
        // viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
        //     e.cancel = true;
        //     viewer.scene.camera.flyTo(homeCameraView);
        // });

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
            <React.Fragment>
                <Globe cesiumContainerId={cesiumContainerId} viewer={viewer} />
            </React.Fragment>
        );
    }
}

export default App;