import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// Middlewares to be added into applyMiddleware function :
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// middleware : a gate keeper -> manipulates actions (pass, log, stop)
//  functions in which actions pass through before getting to the reducers
// middleware package for react redux : 'redux-promise'



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
