import { AxiosResponse } from "axios";
import { GetEntityChartResponseType } from "../types/entityChartTypes";
import { AxiosCompanyData } from "../axios/axiosInstance";
import { ApiRoutes } from "../routes/apiRoutes";

export class ChartApi {
  static async getChartList(): Promise<
    AxiosResponse<GetEntityChartResponseType[]>
  > {
    return AxiosCompanyData.get(ApiRoutes.companyData.getChartList);
  }
}
