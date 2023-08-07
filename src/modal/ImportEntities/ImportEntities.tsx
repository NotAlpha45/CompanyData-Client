import { useDispatch } from "react-redux";
import EntitiesMap from "./EntitiesMap";
import EntitiesPreview from "./EntitiesPreview";
import EntitiesUpload from "./EntitiesUpload";
import { importEntitiesModalsliceActions } from "../../stores/slices/importEntitiesModalSlice";
import { useState } from "react";
import { ModalName } from "../../enums/modalName";
import { useAppSelector } from "../../stores/redux-store";

export type EntityMap = { property: string; excelIndex: number };

export default function ImportEntities() {
  const tittle = "Add Entities";

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

  const initMap:EntityMap[] = [
    {property:"Column1",excelIndex:1},
    {property:"Column2",excelIndex:2},
    {property:"Column3",excelIndex:3},
  ]

  const [file, setfile] = useState<File>();
  const [checkbox, setCheckbox] = useState<boolean>(true);
  const [map, setMap] = useState<EntityMap[]>(initMap);
  const dispatch = useDispatch();

  const modalType = useAppSelector((store) => store.modals.type);

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
    console.log(map);
    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesPreview)
    );
  };

  const handlePreviewEntitiesSubmit = () => {
    dispatch(importEntitiesModalsliceActions.removeModal());
  };
  const handleSetCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handlePreviewEntitiesBack = () => {
    dispatch(
      importEntitiesModalsliceActions.updateModalType(ModalName.EntitiesMap)
    );
  };

  const handleDropdownChange = (e, prop) => {
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
      ></EntitiesPreview>
    </>
  );
}
