import { Dispatch } from "redux";
import api from "../../components/utils/utility";
import { SignupParams } from "../../global.types";
import { SetAlertType, SignupFailType, SignupSuccessType } from "../types";

export const signup =
  ({ name, userName, password, userType }: SignupParams) =>
    async (
      dispatch: Dispatch<SignupSuccessType | SignupFailType | SetAlertType>
    ) => {
      const data = { name, userName, password, userType };

      try {
        const response = await api.post<{ token: string }>("/users", data);

        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: response.data,
        } as SignupSuccessType);

        // @ts-ignore
        //  dispatch(loadUser());
      } catch (error) {
        //alertErrors(error);

        dispatch({
          type: "SIGNUP_FAIL",
        } as SignupFailType);
      }
    };
