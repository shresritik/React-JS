import React from "react";
import { Modal } from "react-bootstrap";
import "./Modals.css";

function Modals(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props?.link && (
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter example-custom-modal-styling-title">
            {props.prodname}
          </Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body>
        {!props?.link ? (
          <button className="button" onClick={props.onHide}>
            X
          </button>
        ) : (
          "Hello"
        )}
        <img
          alt=""
          src={props.img}
          className="img-fluid"
          style={
            !props?.link
              ? {
                  objectFit: "contain",
                  height: "100vh",
                  overflowY: "hidden",
                }
              : {}
          }
        />
      </Modal.Body>
      {props?.link && (
        <Modal.Footer>
          {props?.para && <h5>{props?.para}</h5>}
          {props?.link && <button onClick={props.onHide}>Close</button>}
          <a href={props?.link} rel="noreferrer" target="_blank">
            <button>
              {" "}
              <h6>Visit Website </h6>
            </button>
          </a>{" "}
        </Modal.Footer>
      )}
    </Modal>
    // <img src={props.img} className="img-fluid" />
  );
}

export default Modals;
