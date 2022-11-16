import { AccountType, ClientErrorType } from "../../global.types";
import { AppActionTypes } from "../types";
const initialAccount = { accountNumber: "", id: "", initialDeposit: 0, typeOfAccount: "SB", userID: "", isEnabled: true } as AccountType
const initialState: AccountState = {
    account: initialAccount,
    accountList: [],
    error: {},
    loading: false,
};

const accountReducer = (
    state: AccountState = initialState,
    action: AppActionTypes
): AccountState => {
    switch (action.type) {
        case "GET_ALL_ACCOUNT":
            return {
                ...state,
                accountList: action.payload,
                loading: false,
            };

        case "CREATE_ACCOUNT":
        case "UPDATE_ACCOUNT":
        case "GET_ACCOUNT_BY_ID":
            return {
                ...state,
                account: action.payload,
                loading: false,
            };

        case "UPDATE_ACCOUNT_ERROR":
            return {
                ...state,
                loading: false,
            };
        case "RESET_ACCOUNT":
            return {
                ...state,
                account: initialAccount,
                loading: false,
            };
        default:
            return state;
    }
};

export default accountReducer;

export interface AccountState {
    account?: AccountType | null;
    accountList?: AccountType[];
    loading: boolean;
    error: ClientErrorType | {};
}
