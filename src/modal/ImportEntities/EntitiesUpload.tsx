import { Button } from "react-bootstrap";

function EntitiesUpload({handleFile}) {
  return (
    <>
      <div className="container">
        <div className="content">
          <h3>Select the excel that contains a list of entities</h3>
          <input type="file" id="file" name="file" onChange={handleFile}></input>
          <div className="mt-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ...
            </p>
            <span className="pt-2">
              <a href="https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls">
                Download Default Template
              </a>
            </span>
          </div>
        </div>
        <div className="image">
          <a href="https://www.youtube.com/watch?v=YT8s-90oDC0" target="_blank">
            <img
              src="https://img.freepik.com/free-vector/gradient-youtube-horizontal-banner_52683-78651.jpg?w=1380&t=st=1690977791~exp=1690978391~hmac=87ada9bbc55c61fad78cfae30197ee1304fe1b03a0c4a635c47af2ecd2f22289"
              alt="Custom Thumbnail"
              style={{ width: "480px", height: "360px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export function EntitiesUploadFooter({ handleClose, handleModal, next }) {
  return (
    <>
      <Button onClick={handleClose} variant="secondary">
        Cancel
      </Button>
      <Button onClick={() => handleModal(next)} variant="primary">
        Next
      </Button>
    </>
  );
}

export default EntitiesUpload;
