import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginStatus, navigationStatus, toDoListStatus, updateStockTickers } from './reducers';
import App from './App';

const rootReducer = combineReducers({ loginStatus, navigationStatus, toDoListStatus, updateStockTickers })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
