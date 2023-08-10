import { StorageLocalBase } from "./StorageBase";
export type ApiSchemaLogin = {
  UserName: string;
  FullName: string;
  Token: string;
  Email: string;
  WtaUserType: string;
  TpaUserType: string;
  TpaUserId: string;
  WtaUserId: string;
  Role: string;
};

class StorageAuthImpl extends StorageLocalBase {
  StorageNamespace = "auth";
  readonly tokenType = "Bearer";

  private readonly KeyAccessToken = "accessToken";
  private readonly KeyUserInfo = "userInfo";

  get AccessToken(): string | undefined {
    return this.getString(this.KeyAccessToken);
  }

  set AccessToken(value: string | undefined) {
    this.setString(this.KeyAccessToken, value);
  }

  get UserInfo(): ApiSchemaLogin {
    return this.getObject(this.KeyUserInfo);
  }

  set UserInfo(value: ApiSchemaLogin) {
    this.setObject(this.KeyUserInfo, value);
  }

  Clear: () => void = () => {
    [this.AccessToken, this.UserInfo].forEach(this.delete);
  };
}

export const StorageAuth = new StorageAuthImpl();
export const localStorageAuthData: ApiSchemaLogin = {
  UserName: "",
  FullName: "",
  Token: "",
  Email: "",
  WtaUserType: "None",
  TpaUserType: "None",
  TpaUserId: "",
  WtaUserId: "",
  Role: "User",
};
