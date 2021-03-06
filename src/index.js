import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App.js';
import './index.scss';

// render app
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
