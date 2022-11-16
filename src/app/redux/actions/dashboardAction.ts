import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { AppConstant } from "../../components/utils/AppConstant";

import api from "../../components/utils/utility";
import { AccountType } from "../../global.types";
import { CreateAccountType, GetAccounByIdType, GetAllAccountType, ResetAccountType, SetAlertType, UpdateAccountErrorType, UpdateAccountType } from "../types";
import moment from 'moment'


export const getAllAccount =
    () => async (dispatch: Dispatch<GetAllAccountType | UpdateAccountErrorType>) => {
        try {
            const userID = localStorage.getItem(AppConstant.ID)
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
    () => async (dispatch: Dispatch<GetAccounByIdType | UpdateAccountErrorType>) => {
        try {
            const userID = localStorage.getItem(AppConstant.ID)
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
                CreateAccountType | UpdateAccountType | UpdateAccountErrorType | ResetAccountType | SetAlertType
            >
        ) => {
            try {
                const accountNumber = moment().format("DDMMYYYYHHMMSS")
                const id = localStorage.getItem(AppConstant.ID)
                const APIObj = { ...data, userID: id, accountNumber };

                const response = await api.post<any>(`/account`, APIObj);

                // const { user, ...profileData } = result.data;
                // dispatch({
                //     type: "UPDATE_PROFILE",
                //     payload: response.data.data,
                // });
                if (response.data.status === 201) {
                    // navigate("/dashboard");
                    dispatch({
                        type: "RESET_ACCOUNT"
                    } as ResetAccountType);

                    alert(response.data.msg)

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