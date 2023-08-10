import { AxiosInstance, AxiosRequestConfig } from "axios";
import { StorageBreif } from "../../localStorage/StorageBreif";

export class AuthInjector {
  static Add(instance: AxiosInstance): number {
    function AuthTokenInject(
      requestConfig: AxiosRequestConfig
    ): AxiosRequestConfig {
      const token = StorageBreif.AuthHeaderValue;
      const header = {
        authorization: !!token ? token : "",
      };
      const headers = {
        ...(requestConfig.headers ?? {}),
        ...header,
      };
      return { ...requestConfig, headers };
    }

    return instance.interceptors.request.use(AuthTokenInject);
  }

  /**
   * @static @function Remove() Eject the interceptor from the Axios instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {number} id Interceptor Id
   */

  static Remove(instance: AxiosInstance, id: number): void {
    instance.interceptors.request.eject(id);
  }
}
