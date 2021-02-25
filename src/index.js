import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { authHandler, sessionToken, userProfile, getContractors } from './app-data';
import { combineReducers } from 'redux';

//Combine the authentication reducers
const loginStatus = combineReducers({
  isLoggedin: authHandler,
  token: sessionToken,
  user: userProfile,
  contractors: getContractors
})

//Create a store that stores the login status and the session token.
const store = createStore(loginStatus, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Render the application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
