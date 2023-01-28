import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

import thunk from "redux-thunk";

import { Authentication } from "./Authentication/reducer";
import {signupReducer} from './Authentication/SignupReducer'

const rootReducer = combineReducers({
  Authentication,
  signupReducer
});

const composeEnhancers = compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
