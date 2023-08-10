// export const BASE_URL = "https://192.168.0.111:5000";
export const BASE_URL = process.env.REACT_APP_NEST_URL || "";
export const URL = "https://regplusapigateway.kaz.com.bd/wta";
export const AUTH_URL = process.env.REACT_APP_AUTH_URL || "";
export const USER_API_URL =
  "https://regplusapigateway.kaz.com.bd/auth/api/User/";
export const ApiRoutes = {
  brief: {
    GetMonthsOfAllBriefByYear: `${BASE_URL}/api/RegBriefing/GetMonthsOfAllBriefByYear`,
    GetContentDataByMonthYearBriefType: `${BASE_URL}/api/RegBriefing/LegacyGetContentDataByMonthYearBriefType`,
    GetPresentContentData: `${BASE_URL}/api/RegBriefing/LegacyGetPresentContentData`,
  },
  auth: {
    getAccountStatus: `${URL}/api/Auth/GetUserType`,
    getToken: `${URL}/api/Auth/GetToken`,
    sentMail: `${URL}/api/Auth/SentMailForActivation`,
    sentEmailForSubscription: `${AUTH_URL}/api/Account/ProjectSubscription`,
    getUpdateUserAccount: `${URL}/api/Auth/GetUpdateUserAccount`,
    login: `${AUTH_URL}/api/Account/login`,
    googleLogin: `${AUTH_URL}/api/Account/login/google`,
    signUp: `${AUTH_URL}/api/User/Regbrief`,
    googleSignUp: `${AUTH_URL}/api/User/Regbrief/google`,
    forgotPasswordEmail: `${AUTH_URL}/api/Account/ResetPasswordEmail`,
    getSubscriberByToken: `${BASE_URL}/api/RegBriefPublisher/GetSubscriberByToken`,
  },
  report: {
    GetBriefPrint: `${BASE_URL}/api/Report/GetBriefPrint`,
    PrintData: `${BASE_URL}/api/Print/Index?fileName=`,
    GetInformationPrint: `${BASE_URL}/api/Report/GetInformationPrint`,
  },
  region: {
    GetAllRegionWithCountries: `${BASE_URL}/api/Country/GetCountriesByRegions`,
  },
  userPreference: {
    getUserPreferences: `${BASE_URL}/api/RegBriefing/Preference/Email`,
    getSubscriberByEmail: `${BASE_URL}/api/RegBriefPublisher/GetSubscriberByEmail/`,
    updateUserPreferences: `${BASE_URL}/api/RegBriefing/Preference/`,
    IsFirstTimeUser: `${AUTH_URL}/api/Account/ValidateEmail`,
    subscribeData: `${BASE_URL}/api/RegBriefPublisher/UploadSubscriberData`,
    unSubscribeData: `${BASE_URL}/api/RegBriefPublisher/UnSubscribe`,
  },
};
