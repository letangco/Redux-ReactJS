// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import reducer from './reducers/index';
// // Create Initial Store from Reducer
// const store = createStore(reducer);

// ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Tạo store redux

import {createStore} from 'redux';
import reducer from './reducers/index';

import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();