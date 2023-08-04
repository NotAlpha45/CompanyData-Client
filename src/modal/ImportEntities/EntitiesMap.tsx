import { Button, Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";

function EntitiesMap(props) {
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
          <h3>
            Reassign databasse columns with columns of your excel file.{" "}
            <a href="https://www.youtube.com/watch?v=YT8s-90oDC0">
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
                      // value={selectedOption}
                      onChange={(e)=>props.handleDropdownChange(e,item.id)}
                    >
                      <option value="">Select an option</option>
                      {props.excelProperty.map((excel) => (
                        <option value={excel.name}>{excel.name}</option>
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
          <Button onClick={props.handleModal} variant="primary">
            Review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EntitiesMap;
