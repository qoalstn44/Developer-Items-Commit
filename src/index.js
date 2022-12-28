import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/css/font.css';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './redux/config/configStore';
import { Provider } from 'react-redux';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
