import React from "react";
import ImportEntities from "./ImportEntities/ImportEntities";
import AddEntitiesModal from "./add-entities/AddEntitiesModal";

export const PrivateLayoutModals = () => {

  return (
    <>
      <React.Fragment>
        <ImportEntities />
        <AddEntitiesModal />
      </React.Fragment>
    </>
  );
};

export const privateModals = React.memo(PrivateLayoutModals);
