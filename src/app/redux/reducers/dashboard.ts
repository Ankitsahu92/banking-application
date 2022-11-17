import { AccountType, BeneficiaryType, ClientErrorType } from "../../global.types";
import { AppActionTypes } from "../types";
const initialAccount = { accountNumber: "", id: "", initialDeposit: 0, typeOfAccount: "SB", userID: "", isEnabled: true } as AccountType

const initialBeneficiary = { confirmAccountNumber: "", accountNumber: "", id: "", acountHolderName: "", typeOfAccount: "SB", userID: "", isEnabled: true } as BeneficiaryType

const initialState: DashboardState = {
    account: initialAccount,
    accountList: [],
    beneficiary: initialBeneficiary,
    beneficiaryList: [],

    error: {},
    loading: false,
};

const dashboardReducer = (
    state: DashboardState = initialState,
    action: AppActionTypes
): DashboardState => {
    switch (action.type) {
        //ACCOUNT Start
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
        //ACCOUNT End


        //ACCOUNT Start
        case "GET_ALL_BENEFICIARY":
            return {
                ...state,
                beneficiaryList: action.payload,
                loading: false,
            };

        case "CREATE_BENEFICIARY":
        case "UPDATE_BENEFICIARY":
        case "GET_BENEFICIARY_BY_ID":
            return {
                ...state,
                beneficiary: action.payload,
                loading: false,
            };

        case "UPDATE_BENEFICIARY_ERROR":
            return {
                ...state,
                loading: false,
            };
        case "DELETE_BENEFICIARY":
            const beneficiaryList = state.beneficiaryList.filter(f => f.id !== action.payload.id);
            return {
                ...state,
                beneficiaryList: beneficiaryList,
                loading: false,
            };
        case "RESET_BENEFICIARY":
            return {
                ...state,
                account: initialAccount,
                loading: false,
            };
        //ACCOUNT End
        default:
            return state;
    }
};

export default dashboardReducer;

export interface DashboardState {
    account?: AccountType | null;
    accountList?: AccountType[];

    beneficiary: BeneficiaryType,
    beneficiaryList: BeneficiaryType[],

    loading: boolean;
    error: ClientErrorType | {};
}
