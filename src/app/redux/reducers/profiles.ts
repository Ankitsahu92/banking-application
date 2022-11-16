import { ClientErrorType, ProfileType } from "../../global.types";
import { AppActionTypes } from "../types";

const initialState: ProfileState = {
    profile: null,
    error: {},
    loading: true,
};

const profileReducer = (
    state: ProfileState = initialState,
    action: AppActionTypes
): ProfileState => {
    console.log("inside the reducer profile");
    switch (action.type) {
        case "GET_PROFILE":
        case "UPDATE_PROFILE":
        case "GET_PROFILE_BY_ID":
            return {
                ...state,
                profile: action.payload,
                loading: false,
            };

        case "GET_ALL_PROFILES":
            return {
                ...state,
                loading: false,
            };

        case "PROFILE_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        case "CLEAR_PROFILE":
            return {
                ...state,
                profile: null,
                loading: false,
            };

        case "CLEAR_PROFILES":
            return {
                ...state,
                loading: false,
            };

        case "UPDATE_PROFILE_FAILED":
            return {
                ...state,
                loading: false,
            };

        case "DELETE_ACCOUT":
            return {
                ...initialState,
                loading: false,
            };



        default:
            return state;
    }
};

export default profileReducer;

export interface ProfileState {
    profile?: ProfileType | null;
    loading: boolean;
    error: ClientErrorType | {};
}
