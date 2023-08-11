import React from "react";
import ImportEntities from "./ImportEntities/ImportEntities";
import AddEntitiesModal from "./add-entities/AddEntitiesModal";
import ControlEntitiesModal from "./control-entites/ControlEntitiesModal";
import { ModalName } from "../enums/modalName";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "../stores/redux-store";

export const PrivateLayoutModals = () => {

  const currentSelectedModal = useAppSelector(state => state.modals.type, shallowEqual);

  return (
    <>
      <React.Fragment>
        <ImportEntities />
        <AddEntitiesModal />
        {
          (currentSelectedModal === ModalName.EditEntities) ?
            <ControlEntitiesModal
              modalName={ModalName.EditEntities}
              sidebarNavigationEnabled={true}
              modalHeading={"Edit Entities"}
            /> : null
        }

      </React.Fragment>
    </>
  );
};

export const privateModals = React.memo(PrivateLayoutModals);
