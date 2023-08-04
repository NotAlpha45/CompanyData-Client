import { Button, Modal } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Table } from "react-bootstrap";

function EntitiesPreview(props) {
  return (
    <>
      <Modal
        show={props.show}
        size='xl'
        backdrop="static"
        onHide={props.handleClose}
      >
        <Modal.Header
          className="modal-header  pt-30 ps-30 pe-30 pb-30"
          closeButton
        >
          <h4 className="modal-title fw-normal font-sz-25 header-text-color">
            {props.modalTittle}
          </h4>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.handleBack(props.previous)} variant="secondary">
            Back
          </Button>
          <Button onClick={props.handleClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={() => props.handleModal(props.next, props.submit)} variant="primary">
            Import
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EntitiesPreview;