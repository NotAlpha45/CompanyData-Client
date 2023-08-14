import { AxiosResponse } from "axios";
import { ApiRoutes } from "../../routes/apiRoutes";
import { AxiosCompanyData } from "../../axios/axiosInstance";
import {
  EntityMap,
  EntityMapDto,
  ReviewEntity,
} from "../../types/companydata/importExcelType";
// import { EntityMap } from "../../modal/ImportEntities/ImportEntities";

export default class ImportEntitiesApi {
  GetCompanyDataPropertiesFromFile(
    file: File
  ): Promise<AxiosResponse<EntityMapDto>> {
    const data = new FormData();
    data.append("file", file);

    return AxiosCompanyData.post<EntityMapDto>(
      ApiRoutes.companyData.getCompanyDataProperties,
      data
    );
  }

  GetReviewDataFromFile(
    file: File,
    mapData: EntityMap[],
    chartId: number
  ): Promise<AxiosResponse<ReviewEntity[]>> {
    const data = new FormData();

    data.append("file", file);
    data.append("chartId", chartId.toString());

    mapData.forEach((x, i) => {
      data.append(`map[${i}].key`, x.key.toString());
      data.append(`map[${i}].value`, x.value);
    });

    return AxiosCompanyData.post<ReviewEntity[]>(
      ApiRoutes.companyData.mapEntityFromExcel,
      data
    );
  }

  ImportEntityFromExcel(
    file: File,
    mapData: EntityMap[],
    chartId: number,
    isReplace: boolean
  ): Promise<AxiosResponse<EntityMapDto>> {
    const data = new FormData();

    data.append("file", file);
    data.append("chartId", chartId.toString());
    data.append("isReplace", isReplace.toString());

    mapData.forEach((x, i) => {
      data.append(`map[${i}].key`, x.key.toString());
      data.append(`map[${i}].value`, x.value);
    });

    return AxiosCompanyData.post<EntityMapDto>(
      ApiRoutes.companyData.importEntityFromExcel,
      data
    );
  }
}
