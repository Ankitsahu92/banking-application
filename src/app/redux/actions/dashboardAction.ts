import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { AppConstant } from "../../components/utils/AppConstant";

import api from "../../components/utils/utility";
import { AccountType, BeneficiaryType } from "../../global.types";
import {
    CreateAccountType,
    CreateBeneficiaryType,
    DeleteBeneficiaryType,
    GetAccounByIdType,
    GetAllAccountType,
    GetAllBeneficiaryType,
    GetBeneficiaryByIdType,
    ResetAccountType,
    ResetBeneficiaryType,
    SetAlertType,
    UpdateAccountErrorType,
    UpdateAccountType,
    UpdateBeneficiaryErrorType,
    UpdateBeneficiaryType,
} from "../types";
import moment from "moment";

//Account
export const getAllAccount =
    () =>
        async (dispatch: Dispatch<GetAllAccountType | UpdateAccountErrorType>) => {
            try {
                const userID = localStorage.getItem(AppConstant.ID);
                const response = await api.get<any>(`/account/userID/${userID}`);
                dispatch({
                    type: "GET_ALL_ACCOUNT",
                    payload: response.data.data,
                } as GetAllAccountType);
            } catch (error) {
                dispatch({
                    type: "UPDATE_ACCOUNT_ERROR",
                    // payload: {
                    //     status: "400",
                    //     statusText: "Bad request",
                    // },
                } as UpdateAccountErrorType);
            }
        };

export const getAccountByID =
    () =>
        async (dispatch: Dispatch<GetAccounByIdType | UpdateAccountErrorType>) => {
            try {
                const userID = localStorage.getItem(AppConstant.ID);
                const response = await api.get<any>(`/account/userID/${userID}`);
                dispatch({
                    type: "GET_ACCOUNT_BY_ID",
                    payload: response.data.data,
                } as GetAccounByIdType);
            } catch (error) {
                dispatch({
                    type: "UPDATE_ACCOUNT_ERROR",
                    // payload: {
                    //     status: "400",
                    //     statusText: "Bad request",
                    // },
                } as UpdateAccountErrorType);
            }
        };

export const createOrUpdateAccount =
    (data: AccountType, navigate: NavigateFunction) =>
        async (
            dispatch: Dispatch<
                | CreateAccountType
                | UpdateAccountType
                | UpdateAccountErrorType
                | ResetAccountType
                | SetAlertType
            >
        ) => {
            try {
                const accountNumber = moment().format("DDMMYYYYHHMMSS");
                const id = localStorage.getItem(AppConstant.ID);

                const response = data.id
                    ? await api.put<any>(`/account`, { ...data })
                    : await api.post<any>(`/account`, {
                        ...data,
                        userID: id,
                        accountNumber,
                    });

                // setTimeout(() => {
                //     getAllAccount();
                // }, 500);
                // const { user, ...profileData } = result.data;
                // dispatch({
                //     type: "UPDATE_PROFILE",
                //     payload: response.data.data,
                // });
                if (response.data.status === 201) {
                    // navigate("/dashboard");
                    dispatch({
                        type: "RESET_ACCOUNT",
                    } as ResetAccountType);

                    alert(response.data.msg);
                }
                //return true;
            } catch (error: any) {
                //alertError(error);
                dispatch({
                    type: "UPDATE_ACCOUNT_ERROR",
                } as UpdateAccountErrorType);

                // return false;
            }
        };

//beneficiary
export const getAllBeneficiary =
    () =>
        async (dispatch: Dispatch<GetAllBeneficiaryType | UpdateBeneficiaryErrorType>) => {
            try {
                const userID = localStorage.getItem(AppConstant.ID);
                const response = await api.get<any>(`/beneficiary/userID/${userID}`);

                dispatch({
                    type: "GET_ALL_BENEFICIARY",
                    payload: response.data.data,
                } as GetAllBeneficiaryType);
            } catch (error) {
                dispatch({
                    type: "UPDATE_BENEFICIARY_ERROR",
                } as UpdateBeneficiaryErrorType);
            }
        };

export const getBeneficiaryByID =
    () =>
        async (dispatch: Dispatch<GetBeneficiaryByIdType | UpdateBeneficiaryErrorType>) => {
            try {
                const userID = localStorage.getItem(AppConstant.ID);
                const response = await api.get<any>(`/beneficiary/userID/${userID}`);
                dispatch({
                    type: "GET_BENEFICIARY_BY_ID",
                    payload: response.data.data,
                } as GetBeneficiaryByIdType);
            } catch (error) {
                dispatch({
                    type: "UPDATE_BENEFICIARY_ERROR",
                } as UpdateBeneficiaryErrorType);
            }
        };

export const createOrUpdateBeneficiary =
    (data: BeneficiaryType, navigate: NavigateFunction) =>
        async (
            dispatch: Dispatch<
                | CreateBeneficiaryType
                | UpdateBeneficiaryType
                | UpdateBeneficiaryErrorType
                | ResetBeneficiaryType
                | SetAlertType
            >
        ) => {
            try {
                const id = localStorage.getItem(AppConstant.ID);
                const response = data.id
                    ? await api.put<any>(`/beneficiary`, { ...data })
                    : await api.post<any>(`/beneficiary`, {
                        ...data,
                        userID: id,
                    });

                // setTimeout(() => {
                //     getAllAccount();
                // }, 500);
                // const { user, ...profileData } = result.data;
                // dispatch({
                //     type: "UPDATE_PROFILE",
                //     payload: response.data.data,
                // });
                if (response.data.status === 201) {
                    // navigate("/dashboard");
                    dispatch({
                        type: "RESET_BENEFICIARY",
                    } as ResetBeneficiaryType);

                    alert(response.data.msg);

                    // getAllBeneficiary()
                }
                //return true;
            } catch (error: any) {
                //alertError(error);
                dispatch({
                    type: "UPDATE_BENEFICIARY_ERROR",
                } as UpdateBeneficiaryErrorType);

                // return false;
            }
        };


export const deleteBeneficiary =
    (id: string, navigate: NavigateFunction) =>
        async (
            dispatch: Dispatch<
                | DeleteBeneficiaryType
                | UpdateBeneficiaryErrorType
                | SetAlertType
            >
        ) => {
            try {
                const response = await api.delete<any>(`/beneficiary/${id}`)
                console.log(response.data, "delete response.data");

                if (response.data.status === 200) {
                    dispatch({
                        type: "DELETE_BENEFICIARY",
                        payload: {
                            id: id
                        }
                    } as DeleteBeneficiaryType);
                    alert(response.data.msg);
                }
            } catch (error: any) {
                //alertError(error);
                dispatch({
                    type: "UPDATE_BENEFICIARY_ERROR",
                } as UpdateBeneficiaryErrorType);
            }
        };