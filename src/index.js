import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/App';

import store from './store/configureStore';

const root = createRoot(document.getElementById('root'));
// Оставить только App
// Provider вынести в App.js
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);