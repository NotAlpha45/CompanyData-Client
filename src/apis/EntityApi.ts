import { AxiosResponse } from "axios";
import { GetEntityChartResponseType } from "../types/entityChartTypes";
import { AxiosCompanyData } from "../axios/axiosInstance";
import { ApiRoutes } from "../routes/apiRoutes";
import { GetEntityListByChartIdResponseType } from "../types/entity-types";

export class EntityApi {
  static async getEntityListByChartId(
    chartId: string
  ): Promise<AxiosResponse<GetEntityListByChartIdResponseType[]>> {
    return AxiosCompanyData.get(
      ApiRoutes.companyData.getEntityListByChartId + chartId
    );
  }
}
