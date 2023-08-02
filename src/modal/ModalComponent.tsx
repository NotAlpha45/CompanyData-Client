import { Modal } from 'react-bootstrap';


function ModalComponent({modalTittle,children,modalFooter,size,show,handleClose}) {
  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        size={size}
        backdrop="static"
        onHide={handleClose}
      >
        <Modal.Header className="modal-header  pt-30 ps-30 pe-30 pb-30" closeButton>
          <h4 className="modal-title fw-normal font-sz-25 header-text-color">
            {modalTittle}
          </h4>
        </Modal.Header>
        <Modal.Body>

          {children}

        </Modal.Body>
        <Modal.Footer>
          {modalFooter}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;