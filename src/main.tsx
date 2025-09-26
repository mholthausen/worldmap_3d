import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components/store/index.ts";

import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";
import "antd/dist/reset.css";

import App from "./components/App.tsx";
import Footer from "./components/Footer.tsx";

import { customer } from "./config.ts";

document.title = customer.title;

const rootElement = document.getElementById("root");
const footerElement = document.getElementById("footer");

if (!rootElement || !footerElement) {
  throw new Error("Root or footer element not found");
}

const root = ReactDOM.createRoot(rootElement);
const footer = ReactDOM.createRoot(footerElement);

root.render(
  <Provider store={store}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </Provider>,
);

footer.render(<Footer />);