import { AlerrtType } from "../../global.types";

export interface ISetAlertType {
    type: "SET_ALERT";
    payload: AlerrtType
}

export interface IRemoveAlertType {
    type: "SET_ALERT";
    payload: {
        id: string
    }
}

export type AppActionType =
    | ISetAlertType
    | IRemoveAlertType;
