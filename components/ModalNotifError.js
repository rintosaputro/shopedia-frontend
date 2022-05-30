import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ImSad } from 'react-icons/im';

function ModalNotifError({ message }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  useEffect(() => {
    console.log(message);
    if (message) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [message]);
  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header id="modal-notif" className="error">
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          <div className="text-center">
            <div className="notif-icon">
              {/* <i className="fa-solid fa-xmark text-pallet-1"></i> */}
              <ImSad className="text-pallet-4" />
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-5">
        <div className="text-center">
          <div className="fs-1 pps fw-bold text-pallet-1">Error</div>
          <div className="fs-4 pps  text-pallet-1">{message}</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalNotifError;
