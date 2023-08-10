import { AxiosResponse } from "axios";
import { ApiRoutes } from "../routes/apiRoutes";
// import { SubscriptionType, UserInfo } from "../types/types";
import { SubscriptionType } from "../types/subscriptionTypes";
import { UserInfo } from "../types/userTypes";
import { AxiosAuth } from "../axios/axiosInstance";
// import {
//   FetchUserByTokenResponseType,
//   GetUserPreferencesAxiosType,
//   SignupPayload,
//   TokenResponseModel,
//   UpdateUserPreferencesAxiosType,
// } from "../types/types";

import { ApiSchemaLogin } from "../localStorage/StorageAuth";
import {
  FetchUserByTokenResponseType,
  GetUserPreferencesAxiosType,
  SignupPayload,
  TokenResponseModel,
} from "../types/apiTypes";

export class UserData {
  GetAccountStatus(): Promise<AxiosResponse<string>> {
    return AxiosAuth.get<string>(ApiRoutes.auth.getAccountStatus);
  }
  GetToken(token: string): Promise<AxiosResponse<TokenResponseModel>> {
    return AxiosAuth.get<TokenResponseModel>(
      ApiRoutes.auth.getToken + "?token=" + token
    );
  }
  SentEmail(userInfo: UserInfo): Promise<AxiosResponse<TokenResponseModel>> {
    return AxiosAuth.post<TokenResponseModel>(
      ApiRoutes.auth.sentMail,
      userInfo
    );
  }
  EmailSentForSubscription(
    subscriptionEmailData: SubscriptionType
  ): Promise<AxiosResponse> {
    return AxiosAuth.post(
      ApiRoutes.auth.sentEmailForSubscription,
      subscriptionEmailData
    );
  }
  GetUpdateUserAccount(userInfo: UserInfo): Promise<AxiosResponse<any>> {
    return AxiosAuth.post<any>(ApiRoutes.auth.getUpdateUserAccount, userInfo);
  }

  GetUSerPreferences(
    payload: GetUserPreferencesAxiosType
  ): Promise<AxiosResponse<any>> {
    return AxiosAuth.post<any>(
      ApiRoutes.userPreference.getUserPreferences,
      payload
    );
  }

  GetSubscriberByEmail(
    payload: GetUserPreferencesAxiosType
  ): Promise<AxiosResponse<any>> {
    return AxiosAuth.post<any>(
      ApiRoutes.userPreference.getSubscriberByEmail,
      payload
    );
  }

  IsFirstTimeUser(
    payload: EmailValidationCheckType
  ): Promise<AxiosResponse<any>> {
    return AxiosAuth.post<any>(
      ApiRoutes.userPreference.IsFirstTimeUser,
      payload
    );
  }

  GetSubscriberByToken(payload: { Token: string }) {
    return AxiosAuth.post<FetchUserByTokenResponseType>(
      ApiRoutes.auth.getSubscriberByToken,
      payload
    );
  }

  Login(payload: any): Promise<AxiosResponse<any>> {
    return AxiosAuth.post<any>(ApiRoutes.auth.login, payload);
  }
  VerifyGmail(token: string): Promise<AxiosResponse<ApiSchemaLogin, any>> {
    return AxiosAuth.post<ApiSchemaLogin>(ApiRoutes.auth.googleLogin, {
      token,
    });
  }
  SignUpGoogle(token: string): Promise<AxiosResponse<any>> {
    return AxiosAuth.post<any>(ApiRoutes.auth.googleSignUp, { token });
  }
  Signup(payload: SignupPayload): Promise<AxiosResponse<any>> {
    return AxiosAuth.post<SignupPayload>(ApiRoutes.auth.signUp, payload);
  }
}

export type EmailValidationCheckType = {
  email: string;
};
