import { AxiosInstance, AxiosError } from "axios";

export class RedirectUnauthorize {
  static Add(
    instance: AxiosInstance,
    redirectPath: string,
    onRedirect?: () => void
  ): number {
    function OnFailure(): void {
      onRedirect?.();
      window.location.href = redirectPath;
    }
    async function RedirectWhenUnauthorize(
      err: AxiosError<{ [key: string]: unknown }>
    ): Promise<unknown> {
      if (err.response?.status === 403 || err.response?.status === 401) {
        OnFailure();
      }
      throw err;
    }

    return instance.interceptors.response.use(
      (r) => r,
      RedirectWhenUnauthorize
    );
  }

  static Remove(instance: AxiosInstance, id: number): void {
    instance.interceptors.response.eject(id);
  }
}
