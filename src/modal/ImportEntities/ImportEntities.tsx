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
  const [file, setfile] = useState<File>();
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [map, setMap] = useState<EntityMap[]>([]);
  // const [entityPreview, setEntityPreview] = useState<Entity[]>([]);
  const dispatch = useDispatch();
  const modalType = useAppSelector((store) => store.modals.type);

  const property: PropertyHeader[] = [
    {
      index: 0,
      header: "ID",
    },
    {
      index: 1,
      header: "Entity Name",
    },
    {
      index: 2,
      header: "Incorporation Jurisdiction",
    },
    {
      index: 3,
      header: "Sub National",
    },
    {
      index: 4,
      header: "Tax Residence",
    },
    {
      index: 5,
      header: "Business Type",
    },
    {
      index: 6,
      header: "Business SIC Code",
    },
    {
      index: 7,
      header: "Ownership",
    },
    {
      index: 8,
      header: "Ownership %",
    },
    {
      index: 9,
      header: "Tax Characterization",
    },
  ];
  const excelProperty: PropertyHeader[] = [
    {
      index: 1,
      header: "ID",
    },
    {
      index: 2,
      header: "Entity Name",
    },
    {
      index: 3,
      header: "Incorporation Jurisdiction",
    },
    {
      index: 4,
      header: "Sub National",
    },
    {
      index: 5,
      header: "Business Type",
    },
    {
      index: 6,
      header: "Business SIC Code",
    },
    {
      index: 7,
      header: "Tax Residence",
    },
    {
      index: 8,
      header: "Ownership",
    },
    {
      index: 9,
      header: "Ownership %",
    },
    {
      index: 10,
      header: "Tax Characterization",
    },
  ];

  const initMap: EntityMap[] = [
    {
      key: 1,
      value: "ID",
    },
    {
      key: 2,
      value: "Entity Name",
    },
    {
      key: 3,
      value: "Incorporation Jurisdiction",
    },
    {
      key: 4,
      value: "Sub National",
    },
    {
      key: 7,
      value: "Tax Residence",
    },
    {
      key: 5,
      value: "Business Type",
    },
    {
      key: 6,
      value: "Business SIC Code",
    },
    {
      key: 8,
      value: "Ownership",
    },
    {
      key: 9,
      value: "Ownership %",
    },
    {
      key: 10,
      value: "Tax Characterization",
    },
  ];

  const entityPreview: ReviewEntity[] = [
    {
      Id: 8,
      EntityId: "UNI - Par - 1",
      EntityName: "Unilever - Parent",
      Data: [
        {
          Column: "Incorporation Jurisdiction",
          Old: "USA",
          New: "UK",
        },
        {
          Column: "Sub National",
          Old: "AR",
          New: "Br",
        },
        {
          Column: "Business SIC Code",
          Old: "123",
          New: "5421",
        },
        {
          Column: "Tax Residence",
          Old: "Company",
          New: "Corporate",
        },
        {
          Column: "Ownership",
          Old: "<table style='border-collapse: collapse; width: 100%; border: 1px solid black; background-color: rgba(234, 235, 181, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: left; '>Owner Name</th>  <th style='border: 1px solid black; padding: 8px; text-align: right; '>Owner %</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>Parent</td>  <td style='border: 1px solid black; padding: 8px; text-align: right; '>100.00%</td> </tr></table>",
          New: "<table style='border-collapse: collapse; width: 100%; border: 1px solid black; background-color: rgba(234, 235, 181, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: left; '>Owner Name</th>  <th style='border: 1px solid black; padding: 8px; text-align: right; '>Owner %</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>Third-Party 1</td>  <td style='border: 1px solid black; padding: 8px; text-align: right; '>60%</td> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>Third-Party 2</td>  <td style='border: 1px solid black; padding: 8px; text-align: right; '>40%</td> </tr></table>",
        },
        {
          Column: "Tax Characterization",
          Old: "<table style='border-collapse: collapse; width: 100%; border: 1px solid black; background-color: rgba(234, 235, 181, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: left; '>Tax</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>TCT-Part-1</td> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>TCT-Part-2</td> </tr></table>",
          New: "<table style='border-collapse: collapse; width: 100%; border: 1px solid black; background-color: rgba(234, 235, 181, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: left; '>Tax</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>PE</td> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>LLC</td> </tr></table>",
        },
      ],
    },
    {
      Id: 9,
      EntityId: "Walmart - Par - 1",
      EntityName: "Walmart - Parent",
      Data: [
        {
          Column: "Incorporation Jurisdiction",
          Old: "USA",
          New: "UK",
        },
        {
          Column: "Sub National",
          Old: "AR",
          New: "",
        },
        {
          Column: "Business SIC Code",
          Old: "USA",
          New: "Bangladesh",
        },
        {
          Column: "Ownership",
          Old: "<table style='border-collapse: collapse; width: 100%; border: 1px solid; background-color: rgba(255,255,255, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: center; '>Owner Name</th>  <th style='border: 1px solid black; padding: 8px; text-align: center; '>Owner %</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>Parent</td>  <td style='border: 1px solid black; padding: 8px; text-align: right; '>100.00%</td> </tr></table>",
          New: "<table style='border-collapse: collapse; width: 100%; border: 1px solid black; background-color: rgba(234, 235, 181, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: left; '>Owner Name</th>  <th style='border: 1px solid black; padding: 8px; text-align: right; '>Owner %</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>UNI</td>  <td style='border: 1px solid black; padding: 8px; text-align: right; '>60%</td> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>UNI-IND</td>  <td style='border: 1px solid black; padding: 8px; text-align: right; '>20%</td> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>UNI-UK</td>  <td style='border: 1px solid black; padding: 8px; text-align: right; '>20%</td> </tr></table>",
        },
        {
          Column: "Tax Characterization",
          Old: "<table style='border-collapse: collapse; width: 100%; border: 1px solid black; background-color: rgba(234, 235, 181, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: center; '>Tax</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>Walmart-TCT-Part-1</td> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>Walmart-TCT-Part-2</td> </tr></table>",
          New: "<table style='border-collapse: collapse; width: 100%; border: 1px solid black; background-color: rgba(234, 235, 181, 0.7); color:black;'><tr> <th style='border: 1px solid black; padding: 8px; text-align: left; '>Tax</th> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>SME</td> </tr><tr> <td style='border: 1px solid black; padding: 8px; text-align: left; '>LLC</td> </tr></table>",
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
