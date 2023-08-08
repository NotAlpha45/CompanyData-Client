import { useDispatch } from "react-redux";
import EntitiesMap from "./EntitiesMap";
import EntitiesPreview from "./EntitiesPreview";
import EntitiesUpload from "./EntitiesUpload";
import { importEntitiesModalsliceActions } from "../../stores/slices/importEntitiesModalSlice";
import { useState } from "react";
import { ModalName } from "../../enums/modalName";
import { useAppSelector } from "../../stores/redux-store";
import { IsExcelFile } from "../../utils/file/fileUtils";

export type EntityMap = { property: string; excelIndex: number };

export type Entity = {
  id: number;
  entityId: string;
  entityName: string;
  data: EntityWithValue[];
};
export type EntityWithValue = { column: string; old: string; new: string };

export default function ImportEntities() {
  const tittle = "Add Entities";

  const [loader, setloader] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [file, setfile] = useState<File>();
  const [checkbox, setCheckbox] = useState<boolean>(true);
  const [map, setMap] = useState<EntityMap[]>([]);
  // const [entityPreview, setEntityPreview] = useState<Entity[]>([]);
  const dispatch = useDispatch();

  const modalType = useAppSelector((store) => store.modals.type);

  const property = [
    { id: 1, name: "Column1" },
    { id: 2, name: "Column2" },
    { id: 3, name: "Column3" },
  ];
  const excelProperty = [
    { id: 1, name: "Column 1" },
    { id: 2, name: "Column 2" },
    { id: 3, name: "Column 3" },
  ];

  const initMap: EntityMap[] = [
    { property: "Column1", excelIndex: 1 },
    { property: "Column2", excelIndex: 2 },
    { property: "Column3", excelIndex: 3 },
  ];

  const entityPreview: Entity[] = [
    {
      id: 1,
      entityId: "001",
      entityName: "Uniliver Bangladesh",
      data: [
        {
          column: "Incorporation Jurisdiction",
          old: "India",
          new: "Bangladesh",
        },
        {
          column: "Type",
          old: "Corporate",
          new: "Company",
        },
      ],
    },
    {
      id: 1,
      entityId: "002",
      entityName: "Uniliver India",
      data: [
        {
          column: "Sic Code",
          old: "12345",
          new: "Ind-000",
        },
        {
          column: "Incorporation Jurisdiction",
          old: "UK",
          new: "India",
        },
        {
          column: "Subnational",
          old: "UK",
          new: "India",
        },
      ],
    },
  ];

  const handleClose = () => {
    resetState();

    dispatch(importEntitiesModalsliceActions.removeModal());
  };

  function resetState() {
    setfile(undefined);
    setMap([]);
    setCheckbox(false);
    setError("");
  }

  const handleFile = (e) => {
    const item: File = e.target.files[0];

    if (!IsExcelFile(item.type)) {
      resetState();
      setError("invalid file format!");
      return;
    }

    setError("");

    setfile(item);
  };

  const handleUploadEntitiesSubmit = () => {
    setloader(true);

    setMap(initMap);
    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesMap)
    );

    setloader(false);
  };

  const handleMapEntitiesSubmit = () => {
    setloader(true);

    // setEntityPreview(entity_p);

    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesPreview)
    );

    setloader(false);
  };

  const handlePreviewEntitiesSubmit = () => {
    setloader(true);

    dispatch(importEntitiesModalsliceActions.removeModal());

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

  const handleDropdownChange = (e, prop: string) => {
    const value = e.target.value;

    const existingItemIndex = map.findIndex((item) => item.property === prop);

    if (existingItemIndex !== -1) {
      const updatedMap = [...map];

      updatedMap[existingItemIndex] = {
        ...updatedMap[existingItemIndex],
        excelIndex: Number(value),
      };

      setMap(() => updatedMap);
    } else {
      setMap((prevMap) => [...prevMap, { property: prop, excelIndex: value }]);
    }
  };

  return (
    <>
      <EntitiesUpload
        modalTittle={tittle}
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
        modalTittle={tittle}
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
        modalTittle={tittle}
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
