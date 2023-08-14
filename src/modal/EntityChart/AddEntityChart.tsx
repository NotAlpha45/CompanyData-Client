import { ChangeEvent } from "react";
import { Button, Modal } from "react-bootstrap";
import { Loader } from "rsuite";

type AddEntityChartProps = {
  show: boolean;
  modalTitle: string;
  handleClose: () => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleModal: () => void;
  loader: boolean;
  error: string;
  chart: string;
  handleOnChartChange: (e:ChangeEvent<HTMLInputElement>) => void;
};

function AddEntityChart(props: AddEntityChartProps) {
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
            {props.modalTitle}
          </h4>
        </Modal.Header>

        <Modal.Body>
          {props.loader && <Loader backdrop content="loading..." vertical />}
          
          <div className="container">
            <div className="content">
              <h3>
                Select the excel file that contains a list of your entities
              </h3>
              <div>
                <label>Entity Chart Name</label>
                <input
                  type="text"
                  value={props.chart}
                  onChange={props.handleOnChartChange}
                ></input>
              </div>
              <input
                type="file"
                id="file"
                name="file"
                onChange={props.handleFile}
              ></input>
              {props.error && (
                <div>
                  <span className="text-danger">{props.error}</span>
                </div>
              )}
              <div className="mt-3">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ...
                </p>
                <span className="pt-2">
                  <a
                    target="_blank"
                    href="\src\assets\file\Import_Entities_Template.xlsx"
                    download
                  >
                    Download Default Template
                  </a>
                </span>
              </div>
            </div>
            <span style={{ color: "gray" }}>
              O or,Create an empty enity chart and add items later.
            </span>
            <div className="image">
              <a
                href="https://www.youtube.com/watch?v=YT8s-90oDC0"
                target="_blank"
              >
                <img
                  src="https://img.freepik.com/free-vector/gradient-youtube-horizontal-banner_52683-78651.jpg?w=1380&t=st=1690977791~exp=1690978391~hmac=87ada9bbc55c61fad78cfae30197ee1304fe1b03a0c4a635c47af2ecd2f22289"
                  alt="Custom Thumbnail"
                  style={{ width: "400px", height: "300px" }}
                />
              </a>
            </div>
          </div>
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
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEntityChart;
