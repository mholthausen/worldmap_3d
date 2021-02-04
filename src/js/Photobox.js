import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as BABYLON from 'babylonjs';
import { show } from './store/showPhotobox';
import {
  imageFile
} from '../config';

/**
 * BabylonJS Overlay
 */
function Photobox(props) {
  const dispatch = useDispatch();
  const { showPhotobox } = useSelector((state) => state.showPhotobox);
  useEffect(() => {
    setupBabylonScene();
  }, []);

  /**
   * Creates the BabilonJS scene
   */
  const setupBabylonScene = () => {
    const canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    const engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });

    // call the createScene function
    const scene = createBabylonScene();
    // run the render loop
    engine.runRenderLoop(function () {
      scene.render();
    });
    // the canvas/window resize event handler
    window.addEventListener('resize', function () {
      engine.resize();
    });
  };

  /**
   * Sets the scene up for BabylonJS
   *
   * @param {Object} engine
   * @param {Object} canvas
   */
  const createBabylonScene = (engine, canvas) => {
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

    new BABYLON.PhotoDome(
      'testdome',
      imageFile.source,
      {
        resolution: 128,
        size: 100,
        useDirectMapping: true
      },
      scene
    );
    return scene;
  };

  /**
   * Controls the overlay
   */
  const togglePhotobox = () => {
    dispatch(show(!showPhotobox));
  };

  const { photoboxContainerId } = props;
  const pbClassName = `box stack-top ${!showPhotobox ? ' no-display' : ''}`;
  const photoboxContainer = useRef('photoboxContainer');

  return (
    <React.Fragment>
      <div id="mdiv" className={pbClassName} onClick={togglePhotobox}>
        <div className="mdiv">
          <div className="md"></div>
        </div>
      </div>
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

Photobox.propTypes = {
  viewer: PropTypes.object,
  photoboxContainerId: PropTypes.string
};

export default Photobox;
