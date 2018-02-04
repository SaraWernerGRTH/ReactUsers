import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import UserReducer from './reducers/UserReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
const store = createStore(UserReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
    <Router><App /></Router></Provider>
    , document.getElementById('root'));
registerServiceWorker();