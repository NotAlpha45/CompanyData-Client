import React from 'react';
import { Modal } from 'react-bootstrap';

export type ModalParam = { modalTittle: string, children: React.ReactNode, modalFooter: JSX.Element, size: "sm" | "lg" | "xl", show: boolean, handleClose: (() => void) }

function ModalComponent(props: ModalParam) {

  return (
    <>
      <Modal
        show={props.show}
        size={props.size}
        backdrop="static"
        onHide={props.handleClose}
      >
        <Modal.Header className="modal-header  pt-30 ps-30 pe-30 pb-30" closeButton>
          <h4 className="modal-title fw-normal font-sz-25 header-text-color">
            {props.modalTittle}
          </h4>
        </Modal.Header>
        <Modal.Body>

          {props.children}

        </Modal.Body>
        <Modal.Footer>
          {props.modalFooter}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;