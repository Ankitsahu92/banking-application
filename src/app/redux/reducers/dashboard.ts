import { AccountType, BeneficiaryType, ClientErrorType, OtherBeneficiaryAccountsType, TransferMoneyType } from "../../global.types";
import { AppActionTypes } from "../types";
const initialAccount = { accountNumber: "", id: "", initialDeposit: 0, typeOfAccount: "SB", userID: "", isEnabled: true } as AccountType

const initialBeneficiary = { confirmAccountNumber: "", accountNumber: "", id: "", acountHolderName: "", typeOfAccount: "SB", userID: "", isEnabled: true } as BeneficiaryType

const initialTransferMoney = {
    amount: 0,
    accountNumber: "",
    id: "",
    comment: "",
    tranferFromID: "", tranferToID: ""
} as TransferMoneyType

const initialState: DashboardState = {
    account: initialAccount,
    accountList: [],
    beneficiary: initialBeneficiary,
    beneficiaryList: [],
    transferMoney: initialTransferMoney,
    otherBeneficiary: [],
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

        //Transfer Money
        case "CREATE_TRANSFER_MONEY":
            return {
                ...state,
                transferMoney: action.payload,
                loading: false,
            };

        case "TRANSFER_MONEY_ERROR":
            return {
                ...state,
                loading: false,
            };

        case "GET_ALL_OTHER_BENEFICIARY_ACCOUNTS":
            return {
                ...state,
                otherBeneficiary: action.payload,
                loading: false,
            };
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

    transferMoney: TransferMoneyType,

    otherBeneficiary: OtherBeneficiaryAccountsType[],

    loading: boolean;
    error: ClientErrorType | {};
}
