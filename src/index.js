import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux Imports:
import { Provider } from 'react-redux';
// Import Config Function of App Store
import { createAppStore } from './store/config/storeConfig'
 
// We create the App Store
let appStore = createAppStore()

ReactDOM.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
