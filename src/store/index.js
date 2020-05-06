
import { createStore ,combineReducers ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from 'redux-promise';
import  counter from "../reducers";
const reducer = combineReducers({ counter })
export const store = createStore(reducer,applyMiddleware(promiseMiddleware,thunk))
