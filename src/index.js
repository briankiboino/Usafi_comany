import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { authHandler, sessionToken, userName, userEmail } from './auth';
import { combineReducers } from 'redux';

//Combine the authentication reducers
const loginStatus = combineReducers({
  isLoggedin: authHandler,
  token: sessionToken,
  name: userName,
  email: userEmail
})

//Create a store that stores the login status and the session token.
const store = createStore(loginStatus, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Render the application
ReactDOM.render(
  <Provider store={store}>
    <App />\
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
