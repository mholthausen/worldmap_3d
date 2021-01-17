import React from 'react';
import PropTypes from 'prop-types';
import * as BABYLON from 'babylonjs';
import myImage from './dummy_CGN.jpg';

/**
 * Stellt das div für den Cesium-Globus bereit
 */
class Photobox extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    const engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });
    const createScene = function () {
      const scene = new BABYLON.Scene(engine);
      const camera = new BABYLON.ArcRotateCamera(
        'Camera',
        -Math.PI / 2,
        Math.PI / 2,
        5,
        BABYLON.Vector3.Zero(),
        scene
      );
      camera.attachControl(canvas, true);
      camera.inputs.attached.mousewheel.detachControl(canvas);

      var dome = new BABYLON.PhotoDome(
        'testdome',
        myImage,
        {
          resolution: 64,
          size: 100
        },
        scene
      );
      dome.fovMultiplier = 2000;
      return scene;
    };
    // call the createScene function
    const scene = createScene();
    // run the render loop
    engine.runRenderLoop(function () {
      scene.render();
    });
    // the canvas/window resize event handler
    window.addEventListener('resize', function () {
      engine.resize();
    });
  }

  render() {
    const { photoboxContainerId, displayPhotobox } = this.props;

    const pbClassName = `box stack-top ${
        !displayPhotobox ? ' no-display' : ''
    }`;

    return (
      <React.Fragment>
        <div
          ref="photoboxContainer"
          id={photoboxContainerId}
          className={pbClassName}
        >
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <canvas id="renderCanvas"></canvas>
        </div>
      </React.Fragment>
    );
  }
}

Photobox.propTypes = {
  viewer: PropTypes.object,
  photoboxContainerId: PropTypes.string,
  displayPhotobox: PropTypes.bool
};

export default Photobox;
