import pkg from '../package.json';

export const appVersion: string = pkg.version;
export const cesiumVersion: string = pkg.dependencies.cesium;
export const babylonVersion: string = pkg.dependencies.babylonjs;
