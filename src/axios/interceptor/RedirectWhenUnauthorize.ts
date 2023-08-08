import { AxiosInstance, AxiosError } from "axios";
import { StorageConst } from "../../localStorage/StorageConst";
import * as singleSpa from "single-spa";

export class AxiosRedirectUnauthorize {
  /**
   * @static @function Add() Add interceptor to and instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {string} redirectTo URL to redirect
   * @param {(() => void) | undefined} onRedir Optional callback to execute when redirecting
   * @returns {number} Interceptor Id
   */
  static Add(
    instance: AxiosInstance,
    redirectTo: string,
    onRedir?: () => void
  ): number {
    function OnFailure(): void {
      onRedir?.();
      localStorage.clear();
      window.location.href = redirectTo;
    }
    async function RedirectWhenUnauthorize(
      error: AxiosError<{ [key: string]: unknown }>
    ): Promise<unknown> {
      if (error.response?.status === 403 || error.response?.status === 401) {
        OnFailure();
      }
      if (error.response?.status === 601) {
        let tpaPresentUrl = localStorage.getItem(StorageConst.TPA_PRESENT_URL);
        if (tpaPresentUrl) {
          singleSpa.navigateToUrl(tpaPresentUrl);
        } else {
          singleSpa.navigateToUrl("/tpa/home?isOpenSubscriptionModal=true");
        }
      }

      throw new Error(
        (error?.response?.data?.Message as string) ||
          (error?.response?.data?.message as string) ||
          (error?.response?.data as unknown as string) ||
          "Request Failed"
      );
    }

    return instance.interceptors.response.use(
      (r) => r,
      RedirectWhenUnauthorize
    );
  }
  /**
   * @static @function Remove() Eject the interceptor from the Axios instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {number} id Interceptor Id
   */
  static Remove(instance: AxiosInstance, id: number): void {
    instance.interceptors.response.eject(id);
  }
}
