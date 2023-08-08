export abstract class StorageLocalBase {
  private readonly RootNamespace = "_";
  abstract readonly StorageNamespace: string;

  private getPrefixedKey(key: string): string {
    return `${this.RootNamespace}/${this.StorageNamespace}/${key}`;
  }

  private setData(key: string, data?: string | null): void {
    const _key = this.getPrefixedKey(key);
    if (!!data) {
      window.localStorage.setItem(_key, data);
    } else {
      window.localStorage.removeItem(_key);
    }
  }

  private getData(key: string): string | undefined {
    const _key = this.getPrefixedKey(key);
    const data = window.localStorage.getItem(_key);
    return data ? data : undefined;
  }

  protected setString(key: string, value?: string): void {
    this.setData(key, value);
  }

  protected getString(key: string): string | undefined {
    return this.getData(key);
  }

  protected setBoolean(key: string, value?: boolean): void {
    this.setData(key, String(value));
  }

  protected getBoolean(key: string): boolean | undefined {
    const data = this.getData(key);
    return data ? data === "true" : undefined;
  }

  protected setObject(key: string, value?: object): void {
    this.setData(key, value ? JSON.stringify(value) : undefined);
  }

  protected getObject<T>(key: string): T | undefined {
    const data = this.getData(key);
    return data ? JSON.parse(data) : undefined;
  }

  protected delete(key: string): void {
    this.setData(key, undefined);
  }
}
