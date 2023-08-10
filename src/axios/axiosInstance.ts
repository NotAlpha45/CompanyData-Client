import Axios from "axios";
import { AuthInjector } from "./interceptor/authInjector";
import { AxiosAuthInjector } from "./interceptor/AxiosAuthInjector";

const AxiosBreif = Axios.create();
AuthInjector.Add(AxiosBreif);
// RedirectUnauthorize.Add(AxiosBreif, AppRoutesUI.Auth.Login.Path(), () => {
//   localStorage.clear();
// });

const AxiosAuth = Axios.create({
  baseURL: process.env.REACT_APP_NEST_URL,
});

AxiosAuthInjector.Add(AxiosAuth);
// AxiosRedirectUnauthorize.Add(AxiosAuth, "/", () => {
//   StorageAuth.AccessToken = undefined;
// });
export { AxiosBreif, AxiosAuth };
