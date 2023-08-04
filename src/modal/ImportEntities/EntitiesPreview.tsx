import { Button, Form, Modal } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Table } from "react-bootstrap";

function EntitiesPreview(props) {
  return (
    <>
      <Modal
        show={props.show}
        size="xl"
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
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Column 1</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Previous 1</td>
                        <td>Current 1</td>
                      </tr>
                      <tr>
                        <td>Previous 1</td>
                        <td>Current 1</td>
                      </tr>
                      <tr>
                        <td>Previous 1</td>
                        <td>Current 1</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Column 2</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Previous 1</td>
                        <td>Current 1</td>
                      </tr>
                      <tr>
                        <td>Previous 1</td>
                        <td>Current 1</td>
                      </tr>
                      <tr>
                        <td>Previous 1</td>
                        <td>Current 1</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="mt-3">
            <Form.Check
              inline
              label="Replace the existing sheet with new one"
              name="Replace the existing sheet with new one"
              type={"checkbox"}
              id={`inline-${1}-1`}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => props.handleBack(props.previous)}
            variant="secondary"
            className=""
          >
            Back
          </Button>
          <Button onClick={props.handleClose} variant="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => props.handleModal(props.next, props.submit)}
            variant="primary"
          >
            Import
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EntitiesPreview;