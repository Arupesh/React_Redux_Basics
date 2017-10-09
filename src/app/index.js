import React from "react";
import {render} from "react-dom";
import App from "./containers/App";
import { createStore, combineReducer, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import store from "./store.js"

render(
  <Provider store={store}>
  <App />
  </Provider>
  , window.document.getElementById('app'));
