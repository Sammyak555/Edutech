import {
  legacy_createStore,
  combineReducers,
} from "redux";

import { Authentication } from "./Authentication/reducer";
import {signupReducer} from './Authentication/SignupReducer'

const rootReducer = combineReducers({
  Authentication,
  signupReducer
});

const store = legacy_createStore(
  rootReducer,
);

export default store;
