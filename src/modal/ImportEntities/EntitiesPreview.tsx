import { Button, Form, Modal } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Loader } from "rsuite";
import { Entity } from "./ImportEntities";

function EntitiesPreview(props) {
  return (
    <>
      <Modal
        show={props.show}
        size="xl"
        backdrop="static"
        onHide={props.handleClose}
        scrollable={true}
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
          {props.loader && <Loader backdrop content="loading..." vertical />}

          <div>
            <Accordion defaultActiveKey="0">
              {props.entityPreview.map((item: Entity) => (
                <Accordion.Item key={item.entityId} eventKey={item.entityId}>
                  <Accordion.Header>{item.entityName}</Accordion.Header>
                  <Accordion.Body>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          {item.data.map((h) => (
                            <th key={h.column}>{h.column}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {item.data.map((h) => (
                            <td key={h.old}>{h.old}</td>
                          ))}
                        </tr>
                        <tr>
                          {item.data.map((h) => (
                            <td key={h.new}>{h.new}</td>
                          ))}
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Modal.Body>

        <div className="p-3">
          <Form.Check
            inline
            label="Replace the existing sheet with new one"
            name="Replace the existing sheet with new one"
            type={"checkbox"}
            id={`inline-${1}-1`}
            checked={props.checkbox}
            onChange={props.handleSetCheckbox}
          />
        </div>

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
            disabled={props.loader}
            onClick={props.handleModal}
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
