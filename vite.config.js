import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";

const cesiumSource = "node_modules/cesium/Build/Cesium";
// This is the base url for static files that CesiumJS needs to load.
// Set to an empty string to place the files at the site's root path
const cesiumBaseUrl = "cesiumStatic";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  const base = process.env.VITE_BASE_PATH || (isProduction ? '/' : '/');
  console.log(`Vite is running in ${isProduction ? 'production' : 'development'} mode with base: ${base}`);

  return {
    base,
    // Disable automatic copying of public folder only in production to avoid large data assets
    publicDir: isProduction ? false : 'public',
    define: {
      CESIUM_BASE_URL: JSON.stringify(`${base}${cesiumBaseUrl}`),
    },
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          // Cesium assets (always needed)
          { src: `${cesiumSource}/ThirdParty`, dest: cesiumBaseUrl },
          { src: `${cesiumSource}/Workers`, dest: cesiumBaseUrl },
          { src: `${cesiumSource}/Assets`, dest: cesiumBaseUrl },
          { src: `${cesiumSource}/Widgets`, dest: cesiumBaseUrl },
          // Only copy essential public assets in production, excluding large data folders
          ...(isProduction ? [
            { src: 'public/img', dest: '.' },
            { src: 'public/data/tunnels.glb', dest: 'data' },
            // Note: Large terrain and tileset data should be served separately
            // { src: 'public/data/geotiff-terrain-output', dest: 'data' }, // 2GB - excluded
            // { src: 'public/data/tiles-test', dest: 'data' }, // 607MB - excluded
          ] : [])
        ],
      }),
    ],
  };
})
