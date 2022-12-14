import {
  AccountType,
  AlertType,
  BeneficiaryType,
  ClientErrorType,
  CommentType,
  OtherBeneficiaryAccountsType,
  PostType,
  ProfileType,
  TransferMoneyType,
  UserType,
} from "../../global.types";

export interface SetAlertType {
  type: "SET_ALERT";
  payload: AlertType;
}
export interface RemoveAlertType {
  type: "REMOVE_ALERT";
  payload: {
    id: string;
  };
}
export interface clearAlertsType {
  type: "CLEAR_ALERTS";
}
export interface SignupSuccessType {
  type: "SIGNUP_SUCCESS";
  payload: {
    token: string;
  };
}
export interface SignupFailType {
  type: "SIGNUP_FAIL";
}
export interface UserLoadedType {
  type: "USER_LOADED";
  payload: UserType;
}
export interface UserNotLoadedType {
  type: "USER_NOT_LOADED";
}
export interface AuthErrorType {
  type: "AUTH_ERROR";
}
export interface LoginSuccessType {
  type: "LOGIN_SUCCESS";
  payload: {
    token: string;
  };
}
export interface LoginFailType {
  type: "LOGIN_FAIL";
}
export interface LogoutType {
  type: "LOGOUT";
}
export interface GetProfileType {
  type: "GET_PROFILE";
  payload: ProfileType;
}
export interface GetProfileByIdType {
  type: "GET_PROFILE_BY_ID";
  payload: ProfileType;
}
export interface GetAllProfilesType {
  type: "GET_ALL_PROFILES";
  payload: ProfileType[];
}
export interface ProfileErrorType {
  type: "PROFILE_ERROR";
  payload: ClientErrorType;
}
export interface ClearProfileType {
  type: "CLEAR_PROFILE";
}
export interface ClearProfilesType {
  type: "CLEAR_PROFILES";
}
export interface UpdateProfileType {
  type: "UPDATE_PROFILE";
  payload: ProfileType;
}
export interface UpdateProfileFailedType {
  type: "UPDATE_PROFILE_FAILED";
}
export interface DeleteAccountType {
  type: "DELETE_ACCOUT";
}

export interface GetPostsType {
  type: "GET_POSTS";
  payload: PostType[];
}
export interface GetPostType {
  type: "GET_POST";
  payload: PostType;
}
export interface ClearPostType {
  type: "CLEAR_POST";
}
export interface PostErrorType {
  type: "POST_ERROR";
  payload: ClientErrorType;
}
export interface UpdateLikesType {
  type: "UPDATE_LIKES";
  payload: {
    likes: string[];
    postId: string;
  };
}
export interface DeletePostType {
  type: "DELETE_POST";
  payload: string;
}
export interface AddPostType {
  type: "ADD_POST";
  payload: PostType;
}
export interface AddCommentType {
  type: "ADD_COMMENT";
  payload: CommentType[];
}
export interface DeleteCommentType {
  type: "DELETE_COMMENT";
  payload: string; //commentId
}

//*********************AccountType ************ */


export interface GetAllAccountType {
  type: "GET_ALL_ACCOUNT";
  payload: AccountType[];
}

export interface GetAccounByIdType {
  type: "GET_ACCOUNT_BY_ID";
  payload: AccountType;
}

export interface CreateAccountType {
  type: "CREATE_ACCOUNT";
  payload: AccountType;
}

export interface UpdateAccountType {
  type: "UPDATE_ACCOUNT";
  payload: AccountType;
}

export interface UpdateAccountErrorType {
  type: "UPDATE_ACCOUNT_ERROR";
}
export interface ResetAccountType {
  type: "RESET_ACCOUNT";
}


export interface GetAllBeneficiaryType {
  type: "GET_ALL_BENEFICIARY";
  payload: BeneficiaryType[];
}

export interface GetBeneficiaryByIdType {
  type: "GET_BENEFICIARY_BY_ID";
  payload: BeneficiaryType;
}

export interface CreateBeneficiaryType {
  type: "CREATE_BENEFICIARY";
  payload: BeneficiaryType;
}

export interface UpdateBeneficiaryType {
  type: "UPDATE_BENEFICIARY";
  payload: BeneficiaryType;
}

export interface UpdateBeneficiaryErrorType {
  type: "UPDATE_BENEFICIARY_ERROR";
}
export interface ResetBeneficiaryType {
  type: "RESET_BENEFICIARY";
}

export interface DeleteBeneficiaryType {
  type: "DELETE_BENEFICIARY";
  payload: {
    id: string;
  };
}

export interface CreateTransferMoneyType {
  type: "CREATE_TRANSFER_MONEY";
  payload: TransferMoneyType;
}

export interface TransferMoneyErrorType {
  type: "TRANSFER_MONEY_ERROR";
}

export interface GetAllOtherBeneficiaryAccountsType {
  type: "GET_ALL_OTHER_BENEFICIARY_ACCOUNTS";
  payload: OtherBeneficiaryAccountsType[];
}

//*********************AccountType End ************ */

export type AppActionTypes =
  | GetAllAccountType
  | GetAccounByIdType
  | CreateAccountType
  | UpdateAccountType
  | ResetAccountType
  | UpdateAccountErrorType

  | GetAllBeneficiaryType
  | GetBeneficiaryByIdType
  | CreateBeneficiaryType
  | UpdateBeneficiaryType
  | UpdateBeneficiaryErrorType
  | ResetBeneficiaryType
  | DeleteBeneficiaryType

  | CreateTransferMoneyType
  | TransferMoneyErrorType

  | GetAllOtherBeneficiaryAccountsType

  | SetAlertType
  | RemoveAlertType
  | clearAlertsType
  | SignupSuccessType
  | SignupFailType
  | UserLoadedType
  | UserNotLoadedType
  | AuthErrorType
  | LoginSuccessType
  | LoginFailType
  | LogoutType
  | GetProfileType
  | GetProfileByIdType
  | GetAllProfilesType
  | ProfileErrorType
  | ClearProfileType
  | ClearProfilesType
  | UpdateProfileType
  | UpdateProfileFailedType
  | DeleteAccountType
  | GetPostsType
  | GetPostType
  | ClearPostType
  | PostErrorType
  | UpdateLikesType
  | DeletePostType
  | AddPostType
  | AddCommentType
  | DeleteCommentType;
