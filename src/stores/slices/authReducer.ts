import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../types/userTypes";
import { AuthType } from "../../enums/AuthTypeEnums";

export interface IAuthReducerState {
  isAuthorized: boolean;
  accessToken: string;
  tokenExpires: string;
  user: string;
  failedErrorMessage: string;
  type: AuthType;
  isLoading: boolean;
  tpaUserType: AuthType;
  userInfo: UserInfo;
  isSuccess: boolean;
}

const authInitialState: IAuthReducerState = {
  isAuthorized: false,
  accessToken: "",
  tokenExpires: "",
  user: "",
  failedErrorMessage: "",
  type: AuthType.BasicUser,
  isLoading: false,
  tpaUserType: AuthType.None,
  userInfo: {} as UserInfo,
  isSuccess: false,
};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    loggedIn: (auth, action) => {
      auth.isAuthorized = true;
      // StorageAuth.AccessToken = action.payload.token;
      auth.accessToken = action.payload.token;
      // auth.user = action.payload.user;
      auth.failedErrorMessage = "";
      auth.type = action.payload.wtaUserType;
      auth.tpaUserType = action.payload.tpaUserType;
      // auth.userInfo = action.payload.userInfo;
    },
    loggedOut: (auth) => {
      auth.isAuthorized = false;
      auth.accessToken = "";
      auth.user = "";
      auth.failedErrorMessage = "";
      localStorage.clear();
    },
    loggedInFailed: (auth, actions) => {
      auth.failedErrorMessage = actions.payload;
    },
    setIsLoading: (auth, actions) => {
      auth.isLoading = actions.payload;
    },
    WtaLoggedIn: (auth, action) => {
      auth.isAuthorized = true;
      auth.accessToken = action.payload.token;
      auth.user = action.payload.user;
      auth.failedErrorMessage = "";
      auth.type = AuthType.BasicUser;
    },
  },
});

export const {
  loggedIn,
  loggedOut,
  loggedInFailed,
  WtaLoggedIn,
  setIsLoading,
} = slice.actions;

export const AuthReducer = slice.reducer;
export const AuthActions = slice.actions;
