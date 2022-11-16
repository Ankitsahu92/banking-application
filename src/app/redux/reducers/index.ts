import { combineReducers } from "redux";
import accountReducer from "./account";
import alerts from "./alerts";
import authReducer from "./auth";
import profileReducer from "./profiles";

const rootReducers = combineReducers({
  alert: alerts,
  auth: authReducer,
  profile: profileReducer,
  account: accountReducer
});

export default rootReducers;
