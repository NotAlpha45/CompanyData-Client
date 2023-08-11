import { Button, Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import {
  PropertyHeader,
} from "../../types/entitiesMapDataTypes";
import { EntityMap } from "./ImportEntities";
import { Loader } from "rsuite";
import { ChangeEvent } from "react";

type EntitiesMapProps = {
  file: File | undefined;
  show: boolean;
  handleClose: () => void;
  handleModal: () => void;
  modalTitle: string;
  handleDropdownChange: (
    e: ChangeEvent<HTMLSelectElement>,
    property: string
  ) => void;
  property: PropertyHeader[];
  excelProperty: PropertyHeader[];
  selectedOption: EntityMap[];
  loader: boolean;
};

function EntitiesMap(props: EntitiesMapProps) {
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
            {props.modalTitle}
          </h4>
        </Modal.Header>
        <Modal.Body>
          {props.loader && <Loader backdrop content="loading..." vertical />}

          <h3>
            Reassign databasse columns with columns of your excel file.{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=YT8s-90oDC0"
            >
              Watch this video to learn more
            </a>
          </h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Columns in our organization chart</th>
                <th>Columns in your file which you are uploaded</th>
              </tr>
            </thead>
            <tbody>
              {props.property.map((item) => (
                <tr key={item.index}>
                  <td>{item.header}</td>
                  <td>
                    <select
                      key={item.index}
                      value={
                        props.selectedOption.find(
                          (i: EntityMap) => i.value === item.header
                        )?.key
                      }
                      onChange={(e) => props.handleDropdownChange(e, item.header)}
                    >
                      {props.excelProperty.map((excel) => (
                        <option value={excel.index}>{excel.header}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose} variant="secondary">
            Cancel
          </Button>
          <Button
            disabled={props.loader}
            onClick={props.handleModal}
            variant="primary"
          >
            Review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EntitiesMap;
