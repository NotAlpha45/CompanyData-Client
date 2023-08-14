import { useDispatch } from "react-redux";
import EntitiesMap from "../ImportEntities/EntitiesMap";
import { importEntitiesModalsliceActions } from "../../stores/slices/entitiesModalSlice";
import { ChangeEvent, useState } from "react";
import { ModalName } from "../../enums/modalName";
import { useAppSelector } from "../../stores/redux-store";
import { IsExcelFile } from "../../utils/file/fileUtils";
import { PropertyHeader } from "../../types/entitiesMapDataTypes";
import ImportEntitiesApi from "../../apis/companyData/ImportEntitiesApi";
import toast from "react-hot-toast";
import { EntityMap } from "../../types/companydata/importExcelType";
import AddEntityChart from "./AddEntityChart";

export default function EntityChart() {
  const tittle = "Add Entity Chart";

  const [loader, setloader] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [file, setfile] = useState<File>(undefined);
  const [chart, setChart] = useState<string>("");
  const [map, setMap] = useState<EntityMap[]>([]);

  const dispatch = useDispatch();
  const modalType = useAppSelector((store) => store.modals.type);

  const [property, setProperty] = useState<PropertyHeader[]>([]);
  const [excelProperty, setExcelProperty] = useState<PropertyHeader[]>([]);

  const api = new ImportEntitiesApi();

  const handleClose = () => {
    resetState();

    dispatch(importEntitiesModalsliceActions.removeModal());
  };

  function resetState() {
    setfile(undefined);
    setMap([]);
    setError("");
    setProperty([]);
    setExcelProperty([]);
    setloader(false);
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const item: File | null = e.target.files[0];

    if (!IsExcelFile(item.type)) {
      resetState();
      setError("invalid file format!");
      return;
    }

    setError("");

    setfile(item);
  };

  const handleEntityChartAdd = async () => {
    setloader(true);

    await api
      .GetCompanyDataPropertiesFromFile(file)
      .then((res) => {
        setProperty(res.data.Column);
        setExcelProperty(res.data.ExcelColumn);
        setMap(res.data.MapedColumn);

        dispatch(
          importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesMap)
        );
      })
      .catch((err) => toast.error(err.response.data.Message))
      .finally(() => setloader(false));
  };

  const handleOnChartChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setChart(value);
  };

  const handleMapEntitiesSubmit = async () => {
    setloader(true);

    // chart id will get from redux store. last selected chart. now 1 is static here
    await api
      .GetReviewDataFromFile(file, map, 2)
      .then((res) => {
        setEntityPreview(res.data);

        dispatch(
          importEntitiesModalsliceActions.updateModalType(
            ModalName.EntitiesPreview
          )
        );
      })
      .catch((err) => toast.error(err.response.data.Message))
      .finally(() => setloader(false));
  };

  //   const handlePreviewEntitiesSubmit = () => {
  //     setloader(true);

  //     api
  //       .ImportEntityFromExcel(file, map, 2, checkbox)
  //       .then((res) => {
  //         toast.success("successfully data imported");
  //         resetState();
  //         dispatch(importEntitiesModalsliceActions.removeModal());
  //       })
  //       .catch((err) => toast.error(err.response.data.Message))
  //       .finally(() => setloader(false));
  //   };

  const handleDropdownChange = (
    e: ChangeEvent<HTMLSelectElement>,
    property: string
  ) => {
    const value = e.target.value;

    const existingItemIndex = map.findIndex((item) => item.value === property);

    if (existingItemIndex !== -1) {
      const updatedMap = [...map];

      updatedMap[existingItemIndex] = {
        ...updatedMap[existingItemIndex],
        key: Number(value),
      };

      setMap(() => updatedMap);
    } else {
      setMap((prevMap) => [
        ...prevMap,
        { value: property, key: Number(value) },
      ]);
    }
  };

  return (
    <>
      <AddEntityChart
        chart={chart}
        error={error}
        handleClose={handleClose}
        handleFile={handleFile}
        handleModal={handleEntityChartAdd}
        handleOnChartChange={handleOnChartChange}
        loader={loader}
        modalTitle={tittle}
        show={true}
      ></AddEntityChart>

      <EntitiesMap
        file={file}
        show={modalType === ModalName.EntityChart_EntitiesMap}
        modalTitle={tittle}
        handleClose={handleClose}
        handleModal={handleMapEntitiesSubmit}
        property={property}
        excelProperty={excelProperty}
        handleDropdownChange={handleDropdownChange}
        selectedOption={map}
        loader={loader}
      ></EntitiesMap>
    </>
  );
}
