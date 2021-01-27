import React from 'react';
import ReactDOM from 'react-dom';

import 'cesium/Build/Cesium/Widgets/widgets.css';
import './css/main.css';

import App from './js/App';

import { customer } from './config';

document.title = customer.title;

ReactDOM.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
