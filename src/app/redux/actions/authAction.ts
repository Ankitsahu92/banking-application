import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { AppConstant } from "../../components/utils/AppConstant";
import api from "../../components/utils/utility";
import { LoginParamsType, SignupParams } from "../../global.types";
import { LoginFailType, LoginSuccessType, SetAlertType, SignupFailType, SignupSuccessType } from "../types";

export const signup =
  ({ name, userName, password, userType }: SignupParams, navigate: NavigateFunction) =>
    async (
      dispatch: Dispatch<SignupSuccessType | SignupFailType | SetAlertType>
    ) => {
      const data = { name, userName, password, userType };

      try {
        const response = await api.post<any>("/users", data);
        console.log(response, "users response");
        if (response.data.status === 200) {
          alert(response.data.msg);
          navigate("/login");
        }

        // dispatch({
        //   type: "SIGNUP_SUCCESS",
        //   payload: response.data,
        // } as SignupSuccessType);

        // @ts-ignore
        //  dispatch(loadUser());
      } catch (error: AxiosError) {
        const errorMsg = error.response.data.msg || AppConstant.CommonErrorMessages;
        alert(errorMsg)
        console.error("Error-> ", error);

        // dispatch({
        //   type: "SIGNUP_FAIL",
        // } as SignupFailType);
      }
    };


export const signIn =
  ({ userName, password }: LoginParamsType, navigate: NavigateFunction) =>
    async (
      dispatch: Dispatch<LoginSuccessType | LoginFailType | SetAlertType>
    ) => {
      const data = { userName, password };

      try {
        const response = await api.post<any>("/auth", data);
        console.log(response, "auth response");

        if (response.data.status === 200) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { ...response.data.data },
          } as LoginSuccessType);
          navigate("/dashboard");
        }
      } catch (error: any) {
        const errorMsg = error.response.data.msg || AppConstant.CommonErrorMessages;
        alert(errorMsg)
        console.error("Error-> ", error);
        dispatch({
          type: "LOGIN_FAIL",
        } as LoginFailType);
      }
    };
