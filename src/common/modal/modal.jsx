import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalItem(props) {
  const [show, setShow] = useState(false);
  const { action, onDelete, employee } = props;

  const handleClose = () => {
    setShow(false);
    onDelete(employee)
  };
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="danger" onClick={handleShow}>
        {action}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{action} confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {action} {employee.name} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {action}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ModalItem;
