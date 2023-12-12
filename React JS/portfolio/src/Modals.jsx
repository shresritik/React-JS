import React from "react";
import { Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";
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
          <>
            <button
              id="btn-close"
              className="position-absolute "
              onClick={props.onHide}
            >
              <i className="far fa-times-circle fa-2x"></i>
            </button>
          </>
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
      {/* {console.log(props)} */}
      {(props?.link || props?.git) && (
        <Modal.Footer>
          {props?.para && <h5>{props?.para}</h5>}
          {(props?.link || props?.git) && (
            <button className="btn-modal-close" onClick={props.onHide}>
              Close
            </button>
          )}
          <div>
            {props?.git && (
              <a
                href={props?.git}
                className="mr-2"
                rel="noreferrer"
                target="_blank"
              >
                <button>
                  <h6>Visit Github </h6>
                </button>
              </a>
            )}
            {props?.link && (
              <a href={props?.link} rel="noreferrer" target="_blank">
                <button>
                  <h6>Visit Website </h6>
                </button>
              </a>
            )}
          </div>
        </Modal.Footer>
      )}
    </Modal>
    // <img src={props.img} className="img-fluid" />
  );
}

export default Modals;
