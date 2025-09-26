import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as BABYLON from 'babylonjs';
import { Viewer } from 'cesium';
import { show } from './store/showPhotobox.ts';
import { imageFile } from '../config.ts';
import { RootState } from './store/index';

interface PhotoboxProps {
  viewer?: Viewer | null;
  photoboxContainerId: string;
}

/**
 * BabylonJS Overlay
 */
const Photobox: React.FC<PhotoboxProps> = ({ photoboxContainerId }) => {
  const dispatch = useDispatch();
  const { showPhotobox } = useSelector((state: RootState) => state.showPhotobox);

  useEffect(() => {
    const cleanup = setupBabylonScene();
    return cleanup;
  }, []);

  /**
   * Creates the BabilonJS scene
   */
  const setupBabylonScene = (): (() => void) => {
    const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    if (!canvas) return () => {};

    // Load the 3D engine
    const engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });

    // call the createScene function
    const scene = createBabylonScene(engine, canvas);

    // run the render loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // the canvas/window resize event handler
    const resizeHandler = () => {
      engine.resize();
    };
    window.addEventListener('resize', resizeHandler);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeHandler);
      engine.dispose();
    };
  };  /**
   * Sets the scene up for BabylonJS
   */
  const createBabylonScene = (engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene => {
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
    camera.inputs.attached.mousewheel.detachControl();

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
  const togglePhotobox = (): void => {
    dispatch(show(!showPhotobox));
  };

  const pbClassName = `box stack-top ${!showPhotobox ? ' no-display' : ''}`;
  const photoboxContainer = useRef<HTMLDivElement>(null);

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
};

export default Photobox;
