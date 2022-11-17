import { combineReducers } from "redux";
import dashboardReducer from "./dashboard";
import alerts from "./alerts";
import authReducer from "./auth";
import profileReducer from "./profiles";

const rootReducers = combineReducers({
  alert: alerts,
  auth: authReducer,
  profile: profileReducer,
  dashboard: dashboardReducer
});

export default rootReducers;
