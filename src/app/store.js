import { createStore, combineReducers , applyMiddleware } from "redux";
//import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const store = createStore(userReducer);
// const store = createStore(
//   combineReducers({
//     userReducer
//   }),
// {},
// applyMiddleware(thunk));
//createStore(reducer, initialState)
export default store;
