// For redux-saga generator support 
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore';
import rootSaga from './sagas';

import App from './containers/App';
import './index.css';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Router>
		  <App />
	  </Router>
	</Provider>,
  document.getElementById('root')
);
