import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modals.css";

function Modals(props) {
  console.log("img", props.img);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter example-custom-modal-styling-title">
          {props.prodname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.img} className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
    // <img src={props.img} className="img-fluid" />
  );
}

export default Modals;