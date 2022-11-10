import { AlerrtType } from "../../global.types"
import { AppActionType } from "../types"

const initialState: AlerrtType[] = []

const alert = (state: AlerrtType[] = initialState, action: AppActionType) => {
    switch (action.type) {
        case "SET_ALERT":
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export default alert;

