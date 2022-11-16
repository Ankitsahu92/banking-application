import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { AppConstant } from "../../components/utils/AppConstant";
import api from "../../components/utils/utility";
import { ProfileType } from "../../global.types";
import { GetProfileType, ProfileErrorType, UpdateProfileType, UpdateProfileFailedType, SetAlertType, DeleteAccountType } from "../types";

export const getCurrentUserProfile =
    () => async (dispatch: Dispatch<GetProfileType | ProfileErrorType>) => {
        try {
            const id = localStorage.getItem(AppConstant.ID)
            const response = await api.get<any>(`/users/${id}`);

            dispatch({
                type: "GET_PROFILE",
                payload: response.data.data,
            } as GetProfileType);
        } catch (error) {
            dispatch({
                type: "PROFILE_ERROR",
                payload: {
                    status: "400",
                    statusText: "Bad request",
                },
            } as ProfileErrorType);
        }
    };

export const createOrUpdateProfile =
    (data: ProfileType, navigate: NavigateFunction) =>
        async (
            dispatch: Dispatch<
                UpdateProfileType | UpdateProfileFailedType | SetAlertType
            >
        ) => {
            try {
                const id = localStorage.getItem(AppConstant.ID)
                const result = await api.put<any>(`/users`, { ...data, id: id });

                // const { user, ...profileData } = result.data;
                // dispatch({
                //     type: "UPDATE_PROFILE",
                //     payload: profileData,
                // });
                navigate("/dashboard");
            } catch (error: any) {

                //alertError(error);
                dispatch({
                    type: "UPDATE_PROFILE_FAILED",
                });
            }
        };

export const deleteAccount =
    () => async (dispatch: Dispatch<DeleteAccountType>) => {
        try {
            await api.delete("/api/user/delete");
            dispatch({ type: "DELETE_ACCOUT" });
        } catch (error) {
            //alertError(error);
        }
    };
