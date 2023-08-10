import { StorageLocalBase } from "./StorageBase";

class LocalUrl extends StorageLocalBase {
  StorageNamespace = "CurrentUrl";
  readonly KeyUrl = "url";
  get getUrl(): string | undefined {
    return this.getString("url");
  }
  set setUrl(value: string | undefined) {
    this.setString(this.KeyUrl, value);
  }
}

export const CurrentUrl = new LocalUrl();
