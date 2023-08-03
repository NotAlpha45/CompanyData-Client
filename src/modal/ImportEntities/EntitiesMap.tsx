import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

function EntitiesMap() {
  return (
    <>
      <h3>
        Reassign databasse columns with columns of your excel file.{" "}
        <a href="https://www.youtube.com/watch?v=YT8s-90oDC0">
          Watch this video to learn more
        </a>
      </h3>
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
    </>
  );
}

export function EntitiesMapFooter({ handleClose, handleModal, next }) {
  return (
    <>
      <Button onClick={handleClose} variant="secondary">
        Cancel
      </Button>
      <Button onClick={() => handleModal(next)} variant="primary">
        Review
      </Button>
    </>
  );
}

export default EntitiesMap;
