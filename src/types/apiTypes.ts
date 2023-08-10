export type TokenResponseModel = {
  isSuccess: boolean;
  message: string;
  token: string;
};

export type GetUserPreferencesAxiosType = {
  Email: string;
};

export type SignupUserData = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  cpassword: string;
};
export type SignupPayload = {
  Email?: string;
  UserName?: string;
  FirstName?: string;
  LastName?: string;
  CompanyName?: string;
  TypeOfCompany?: string;
  ExpirePeriod?: string;
  WtaUserType?: string;
  TpaUserType?: string;
  JobTitle?: string;
  PhoneNumber?: string;
  IsPaid?: boolean;
  ExpiryDate?: Date;
  Password?: string;
};

export type FetchUserByTokenResponseType = {
  Id: number | string;
  Email: string;
  FullName: string;
  ShortName: string;
  BriefType: string;
  BriefSelectedType: string | null;
  CreateDate: string;
  UnsubscribeToken: string;
};
