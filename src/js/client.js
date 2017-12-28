import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore, { persistor } from './config/store';

import App from './containers';

import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

// Load SCSS
import '../scss/app.scss';

es6Promise.polyfill();

const store = configureStore();

const render = Component => {

    ReactDOM.render(
        <AppContainer>
            <Provider store={ store }>
                <PersistGate persistor={ persistor }>
                    <BrowserRouter>
                        <Component />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
  );
};

// Render app
render(App);

if (module.hot) {
  module.hot.accept('./containers/', () => {
    const NewClient = require('./containers/index').default; // eslint-disable-line global-require

    render(NewClient);
  });
}
