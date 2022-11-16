import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { AppConstant } from "../../components/utils/AppConstant";

import api from "../../components/utils/utility";
import { AccountType } from "../../global.types";
import { CreateAccountType, GetAccounByIdType, GetAllAccountType, SetAlertType, UpdateAccountErrorType, UpdateAccountType } from "../types";


export const getAllAccount =
    () => async (dispatch: Dispatch<GetAllAccountType | UpdateAccountErrorType>) => {
        try {
            const userID = localStorage.getItem(AppConstant.ID)
            const response = await api.get<any>(`/account/${userID}`);
            console.log(response.data.data, "GetAllAccountType");
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
            const id = localStorage.getItem(AppConstant.ID)
            const response = await api.get<any>(`/account/${id}`);
            console.log(response.data.data, "GET_ACCOUNT_BY_ID");
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
                CreateAccountType | UpdateAccountType | UpdateAccountErrorType | SetAlertType
            >
        ) => {
            try {
                const id = localStorage.getItem(AppConstant.ID)
                const response = await api.put<any>(`/account`, { ...data, id: id });
                console.log(response, "createOrUpdateAccount");

                // const { user, ...profileData } = result.data;
                // console.log(JSON.stringify(profileData));
                // console.log(JSON.stringify(api));
                // dispatch({
                //     type: "UPDATE_PROFILE",
                //     payload: response.data.data,
                // });
                // if (response.data.status === 200) {
                //     navigate("/dashboard");
                // }
                //return true;
            } catch (error: any) {
                console.log(JSON.stringify(error));

                //alertError(error);
                dispatch({
                    type: "UPDATE_ACCOUNT_ERROR",
                } as UpdateAccountErrorType);

                // return false;
            }
        };