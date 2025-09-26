declare module "*.css" {
  const content: string;
  export default content;
}

declare module "cesium/Build/Cesium/Widgets/widgets.css";
declare module "antd/dist/reset.css";

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_EXTERNAL_DATA_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
