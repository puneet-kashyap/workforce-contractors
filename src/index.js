import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import rootReducer from './redux/reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
