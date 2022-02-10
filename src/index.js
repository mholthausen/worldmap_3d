import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';

import 'cesium/Build/Cesium/Widgets/widgets.css';
import './css/main.css';
import 'antd/dist/antd.css';

import App from './js/App';
import Footer from './js/Footer';

import { customer } from './config';

document.title = customer.title;

ReactDOM.render(
  <Provider store={store}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
