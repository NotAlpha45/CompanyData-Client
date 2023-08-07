import { useDispatch } from "react-redux";
import EntitiesMap from "./EntitiesMap";
import EntitiesPreview from "./EntitiesPreview";
import EntitiesUpload from "./EntitiesUpload";
import { importEntitiesModalsliceActions } from "../../stores/slices/importEntitiesModalSlice";
import { useState } from "react";
import { ModalName } from "../../enums/modalName";
import { useAppSelector } from "../../stores/redux-store";

export type EntityMap = { id: number; name: string };

export default function ImportEntities() {
  const [file, setfile] = useState<File>();
  const [map, setMap] = useState<EntityMap[]>([]);
  const dispatch = useDispatch();

  const modalType = useAppSelector((store) => store.modals.type);

  const tittle = "Import Entities";

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

  const handleClose = () => {
    dispatch(importEntitiesModalsliceActions.removeModal());
  };

  const handleFile = (e) => {
    setfile(e.target.files[0]);
  };

  const handleUploadEntitiesSubmit = () => {
    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesMap)
    );
  };

  const handleMapEntitiesSubmit = () => {
    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesPreview)
    );
  };

  const handlePreviewEntitiesSubmit = () => {
    dispatch(importEntitiesModalsliceActions.removeModal());
  };

  const handlePreviewEntitiesBack = () => {
    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesMap)
    );
  };

  const handleDropdownChange = (e, property) => {
    const value = e.target.value;

    const existingItemIndex = map.findIndex((item) => item.id === property);

    if (existingItemIndex !== -1) {
      const updatedMap = [...map];

      updatedMap[existingItemIndex] = {
        ...updatedMap[existingItemIndex],
        name: value,
      };

      setMap(updatedMap);
    } else {
      setMap((prevMap) => [...prevMap, { id: property, name: value }]);
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
      ></EntitiesMap>

      <EntitiesPreview
        show={modalType === ModalName.EntitiesPreview}
        modalTittle={tittle}
        handleClose={handleClose}
        handleFile={handleFile}
        handleModal={handlePreviewEntitiesSubmit}
        handleBack={handlePreviewEntitiesBack}
      ></EntitiesPreview>
    </>
  );
}
