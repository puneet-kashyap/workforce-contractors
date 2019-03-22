import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'Redux';

import './index.css';
import App from './App';
import combinedReducers from './reducers'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={createStore(combinedReducers)}>
    <App />, document.getElementById('root')
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
