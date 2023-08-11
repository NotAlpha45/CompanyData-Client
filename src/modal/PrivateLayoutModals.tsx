import React from "react";
import ImportEntities from "./ImportEntities/ImportEntities";
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
        {
          (currentSelectedModal === ModalName.EditEntities) ?
            <ControlEntitiesModal
              modalName={ModalName.EditEntities}
              sidebarNavigationEnabled={true}
              modalHeading={"Edit Entities"}
            /> : null
        }

        {
          (currentSelectedModal === ModalName.AddEntities) ?
            <ControlEntitiesModal
              modalName={ModalName.AddEntities}
              sidebarNavigationEnabled={false}
              modalHeading={"Add Entities"}
            /> : null
        }

      </React.Fragment>
    </>
  );
};

export const privateModals = React.memo(PrivateLayoutModals);
