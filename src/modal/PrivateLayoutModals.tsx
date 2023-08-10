import React from "react";
import ImportEntities from "./ImportEntities/ImportEntities";
import AddEntitiesModal from "./add-entities/AddEntitiesModal";
import ControlEntitiesModal from "./control-entites/ControlEntitiesModal";
import { ModalName } from "../enums/modalName";

export const PrivateLayoutModals = () => {

  return (
    <>
      <React.Fragment>
        <ImportEntities />
        <AddEntitiesModal />
        <ControlEntitiesModal
          modalName={ModalName.EditEntities}
          sidebarNavigationEnabled={true}
          modalHeading={"Edit Entities"}
        />
      </React.Fragment>
    </>
  );
};

export const privateModals = React.memo(PrivateLayoutModals);
