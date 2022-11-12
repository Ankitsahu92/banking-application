import { combineReducers } from "redux";
import alerts from "./alerts";
import authReducer from "./auth";

const rootReducers = combineReducers({
  alert: alerts,
  auth: authReducer,
});

export default rootReducers;
