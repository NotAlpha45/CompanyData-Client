import { useDispatch } from "react-redux";
import EntitiesMap from "./EntitiesMap";
import EntitiesPreview from "./EntitiesPreview";
import EntitiesUpload from "./EntitiesUpload";
import { importEntitiesModalsliceActions } from "../../stores/slices/importEntitiesModalSlice";
import { ChangeEvent, useState } from "react";
import { ModalName } from "../../enums/modalName";
import { useAppSelector } from "../../stores/redux-store";
import { IsExcelFile } from "../../utils/file/fileUtils";
import { PropertyHeader } from "../../types/entitiesMapDataTypes";
import ImportEntitiesApi from "../../apis/companyData/ImportEntitiesApi";

// property: value; excelIndex: key
export type EntityMap = { value: string; key: number };

export type ReviewEntity = {
  Id: number;
  EntityId: string;
  EntityName: string;
  Data: ReviewEntityData[];
};
export type ReviewEntityData = { Column: string; Old: string; New: string };

export default function ImportEntities() {
  const tittle = "Add Entities";

  const [loader, setloader] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [file, setfile] = useState<File>(undefined);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [map, setMap] = useState<EntityMap[]>([]);

  const dispatch = useDispatch();
  const modalType = useAppSelector((store) => store.modals.type);

  const [property, setProperty] = useState<PropertyHeader[]>([]);
  const [excelProperty, setExcelProperty] = useState<PropertyHeader[]>([]);
  const [entityPreview, setEntityPreview] = useState<ReviewEntity[]>([]);

  const api = new ImportEntitiesApi();

  const handleClose = () => {
    resetState();

    dispatch(importEntitiesModalsliceActions.removeModal());
  };

  function resetState() {
    setfile(undefined);
    setMap([]);
    setCheckbox(false);
    setError("");
    setProperty([]);
    setExcelProperty([]);
    setEntityPreview([]);
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

  const handleUploadEntitiesSubmit = async () => {
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
      .catch((err) => console.log(err));

    setloader(false);
  };

  const handleMapEntitiesSubmit = async () => {
    setloader(true);

    // chart id will get from redux store. last selected chart. now 1 is static here
    await api
      .GetReviewDataFromFile(file, map, 1)
      .then((res) => {
        setEntityPreview(res.data);

        dispatch(
          importEntitiesModalsliceActions.updateModalType(
            ModalName.EntitiesPreview
          )
        );
      })
      .catch((err) => console.log(err));

    setloader(false);
  };

  const handlePreviewEntitiesSubmit = () => {
    setloader(true);

    api
      .ImportEntityFromExcel(file, map, 1, checkbox)
      .then((res) => {
        console.log(res.data);
        resetState();
        dispatch(importEntitiesModalsliceActions.removeModal());
      })
      .catch((err) => console.log(err));

    setloader(false);
  };
  const handleSetCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handlePreviewEntitiesBack = () => {
    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesMap)
    );
  };

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
      <EntitiesUpload
        modalTitle={tittle}
        handleClose={handleClose}
        handleFile={handleFile}
        handleModal={handleUploadEntitiesSubmit}
        show={modalType === ModalName.EntitiesUpload}
        file={file}
        error={error}
        loader={loader}
      ></EntitiesUpload>

      <EntitiesMap
        file={file}
        show={modalType === ModalName.EntitiesMap}
        modalTitle={tittle}
        handleClose={handleClose}
        handleModal={handleMapEntitiesSubmit}
        property={property}
        excelProperty={excelProperty}
        handleDropdownChange={handleDropdownChange}
        selectedOption={map}
        loader={loader}
      ></EntitiesMap>

      <EntitiesPreview
        show={modalType === ModalName.EntitiesPreview}
        modalTitle={tittle}
        handleClose={handleClose}
        handleFile={handleFile}
        handleModal={handlePreviewEntitiesSubmit}
        handleBack={handlePreviewEntitiesBack}
        checkbox={checkbox}
        handleSetCheckbox={handleSetCheckbox}
        loader={loader}
        entityPreview={entityPreview}
      ></EntitiesPreview>
    </>
  );
}
