import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export function Modale() {
    console.log("model");
  return (
    <Modal show={true}>
    <ModalHeader>
      <ModalTitle>Hi</ModalTitle>
    </ModalHeader>
    <ModalBody>asdfasdf</ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>

    // <div  className="modal"  show={true}>
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">Modal title</h5>
    //         <button
    //           type="button"
    //           className="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Modal body text goes here.</p>
    //       </div>
    //       <div className="modal-footer">
    //         <button
    //           type="button"
    //           className="btn btn-secondary"
    //           data-dismiss="modal"
    //         >
    //           Close
    //         </button>
    //         <button type="button" className="btn btn-primary">
    //           Save changes
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

