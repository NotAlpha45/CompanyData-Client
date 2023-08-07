import React, { useEffect } from "react";
import ImportEntities from "./ImportEntities/ImportEntities";
import { useDispatch } from "react-redux";
import { importEntitiesModalsliceActions } from "../stores/slices/importEntitiesModalslice";
import { ModalName } from "../enums/modalName";

export const PrivateLayoutModals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      importEntitiesModalsliceActions.addModal({
        type: ModalName.EntitiesUpload,
        data: {},
      })
    );
  }, []);

  return (
    <>
      <React.Fragment>
        <ImportEntities></ImportEntities>
      </React.Fragment>
    </>
  );
};

export const privateModals = React.memo(PrivateLayoutModals);
