import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./js/store/index.js";

import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";
import "antd/dist/reset.css";

import App from "./js/App.jsx";
import Footer from "./js/Footer.jsx";

import { customer } from "./config.js";

document.title = customer.title;

const root = ReactDOM.createRoot(document.getElementById("root"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

root.render(
  <Provider store={store}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </Provider>,
);

footer.render(<Footer />);
