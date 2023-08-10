import { Button, Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { EntitiesMapExcelProperties, EntitiesMapProperties } from "../../types/entitiesMapDataTypes";
import { EntityMap } from "./ImportEntities";
import { Loader } from "rsuite";

type EntitiesMapProps = {
  file: File | undefined;
  show: boolean;
  handleClose: () => void;
  handleModal: () => void;
  modalTitle: string;
  handleDropdownChange: (e: any, property: string) => void;
  property: EntitiesMapProperties[];
  excelProperty: EntitiesMapExcelProperties[];
  selectedOption: EntityMap[];
}

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
            <a target="_blank" href="https://www.youtube.com/watch?v=YT8s-90oDC0">
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
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <select
                      key={item.id + item.name}
                      value={
                        props.selectedOption.find(
                          (i: EntityMap) => i.property === item.name
                        )?.excelIndex
                      }
                      onChange={(e) => props.handleDropdownChange(e, item.name)}
                    >
                      {props.excelProperty.map((excel) => (
                        <option value={excel.id}>{excel.name}</option>
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
