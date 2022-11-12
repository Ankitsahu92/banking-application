import { AlertType } from "../../global.types";

import { AppActionTypes } from "../types";

const initialState: AlertType[] = [];

export default (state: AlertType[] = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case "SET_ALERT":
      // hold the infor from the payload to the store.

      return [...state, action.payload];
    // it will add all alert details ( SetAlertType has a payload filed and it will hold all alert related information like id , msg, alert type.)

    case "REMOVE_ALERT":
      return state.filter((alert: AlertType) => alert.id !== action.payload.id);
    case "CLEAR_ALERTS":
      return [];
    default:
      return state;
  }
};
