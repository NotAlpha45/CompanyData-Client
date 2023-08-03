import { useEffect, useState } from "react";
import ModalComponent from "../ModalComponent";
import EntitiesPreview, { EntitiesPreviewFooter } from "./EntitiesPreview";
import EntitiesUpload, { EntitiesUploadFooter } from "./EntitiesUpload";
import EntitiesMap, { EntitiesMapFooter } from "./EntitiesMap";
import { ModalName } from "../../enums/modalName";
import { shallowEqual, useDispatch } from "react-redux";
import { useAppSelector } from "../../stores/redux-store";
import { importEntitiesModalsliceActions } from "../../stores/slices/importEntitiesModalslice";

export default function ImportEntities() {
  //#region Import Entities Modal Control
  const [show, setShow] = useState(true);
  const [modal, setModal] = useState<JSX.Element>();
  const [footer, setFooter] = useState<JSX.Element>();

  const dispatch = useDispatch();
  const importEntityState = useAppSelector(
    (state) => state.modals,
    shallowEqual
  );

  useEffect(() => {
    handleModal(ModalName.EntitiesUpload);
    handleFooter(ModalName.EntitiesUpload);

    dispatch(
      importEntitiesModalsliceActions.addModal({
        type: ModalName.EntitiesUpload,
        data: {},
      })
    );
  }, []);

  const handleClose = () => setShow(false);

  const handleFile = (event) => {
    const value = event.target.files[0];

    dispatch(importEntitiesModalsliceActions.updateFileIntoModal(URL.createObjectURL(value)));
  };

  const handleModal = (
    modal: ModalName,
    file?: File,
    submit: boolean = false
  ) => {

    if (submit) {
      handleClose();
    }

    if (modal === ModalName.EntitiesMap) {
      console.log("File",importEntityState.data.file);
    }

    // set modal

    if (modal) setModal(selectModal(modal));

    handleFooter(modal);
  };

  const selectModal = (modal: ModalName) => {
    switch (modal) {
      case ModalName.EntitiesUpload:
        return <EntitiesUpload handleFile={handleFile}></EntitiesUpload>;

      case ModalName.EntitiesMap:
        return <EntitiesMap></EntitiesMap>;

      case ModalName.EntitiesPreview:
        return <EntitiesPreview></EntitiesPreview>;

      default:
        return <EntitiesUpload handleFile={handleFile}></EntitiesUpload>;
    }
  };

  const handleFooter = (modal: ModalName) => {
    if (modal) setFooter(selectFooter(modal));
  };
  const selectFooter = (modal: ModalName) => {
    switch (modal) {
      case ModalName.EntitiesUpload:
        return (
          <EntitiesUploadFooter
            next={ModalName.EntitiesMap}
            handleClose={handleClose}
            handleModal={handleModal}
          ></EntitiesUploadFooter>
        );

      case ModalName.EntitiesMap:
        return (
          <EntitiesMapFooter
            next={ModalName.EntitiesPreview}
            handleClose={handleClose}
            handleModal={handleModal}
          ></EntitiesMapFooter>
        );

      case ModalName.EntitiesPreview:
        return (
          <EntitiesPreviewFooter
            previous={ModalName.EntitiesMap}
            next={null}
            submit={true}
            handleBack={handleModal}
            handleClose={handleClose}
            handleModal={handleModal}
          ></EntitiesPreviewFooter>
        );

      default:
        return (
          <EntitiesUploadFooter
            next={ModalName.EntitiesMap}
            handleClose={handleClose}
            handleModal={handleModal}
          ></EntitiesUploadFooter>
        );
    }
  };

  //#endregion

  return (
    <ModalComponent
      modalTittle="Add Entities"
      modalFooter={footer}
      handleClose={handleClose}
      show={show}
      size="xl"
    >
      {modal}
    </ModalComponent>
  );
}
