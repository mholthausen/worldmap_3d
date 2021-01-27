import React from 'react';
import PropTypes from 'prop-types';
import * as BABYLON from 'babylonjs';
import myImage from '../img/dummy_CGN.jpg';

/**
 * BabylonJS Overlay
 */
class Photobox extends React.PureComponent {
  /**
   * The constructor
   *
   * @param {Object} props 
   */
  constructor(props) {
    super(props);

    this.createBabylonScene = this.createBabylonScene.bind(this);
    this.getBabylonScene = this.getBabylonScene.bind(this);
  }

  /**
   * Runs when the component did mount
   */
  componentDidMount() {
    this.createBabylonScene();
  }

  /**
   * Creates the BabilonJS scene
   */
  createBabylonScene() {
    const canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    const engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });
    const scene = this.getBabylonScene(engine, canvas);

    // run the render loop
    engine.runRenderLoop(function () {
      scene.render();
    });
    // the canvas/window resize event handler
    window.addEventListener('resize', function () {
      engine.resize();
    });
  }

  /**
   * Sets the scene up for BabylonJS
   *
   * @param {Object} engine 
   * @param {Object} canvas 
   */
  getBabylonScene (engine, canvas) {
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
  }

  /**
   * The render method
   */
  render() {
    const { photoboxContainerId, displayPhotobox } = this.props;
    const photoboxContainer = 'photoboxContainer';

    const pbClassName = `box stack-top ${
      !displayPhotobox ? ' no-display' : ''
    }`;

    return (
      <React.Fragment>
        <div
          ref={photoboxContainer}
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
