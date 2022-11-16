import { combineReducers } from "redux";
import alerts from "./alerts";
import authReducer from "./auth";
import profileReducer from "./profiles";

const rootReducers = combineReducers({
  alert: alerts,
  auth: authReducer,
  profile: profileReducer
});

export default rootReducers;
