import React from "react";
import {render} from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";

const initialState = {
  name : "ROY",
  age : "29"
};

const userReducer = (state = initialState, action) => {
  console.log("REDUCER CALLED",state)
  switch (action.type) {
    case "SET_NAME":
      return Object.assign({}, state, {
        name : action.payload
      })
      break;
    default:
      return state;
  }
  return state;
}

export default userReducer;
