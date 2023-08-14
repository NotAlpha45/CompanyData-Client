import Axios from "axios";
import { AuthInjector } from "./interceptor/authInjector";
import { AxiosAuthInjector } from "./interceptor/AxiosAuthInjector";

const AxiosCompanyData = Axios.create();
AuthInjector.Add(AxiosCompanyData);
// RedirectUnauthorize.Add(AxiosCompanyData, AppRoutesUI.Auth.Login.Path(), () => {
//   localStorage.clear();
// });

const AxiosAuth = Axios.create({
  // baseURL: process.env.REACT_APP_NEST_URL,
});

AxiosAuthInjector.Add(AxiosAuth);
// AxiosRedirectUnauthorize.Add(AxiosAuth, "/", () => {
//   StorageAuth.AccessToken = undefined;
// });
export { AxiosCompanyData, AxiosAuth };
