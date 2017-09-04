import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index.js';
import LoginPage from './containers/LoginPage.js';
import SearchPage from './containers/SearchPage.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
