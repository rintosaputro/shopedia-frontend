import { useEffect, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'

const ModalLoading = ({ isLoading = false }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (isLoading) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [isLoading])
  return (
    <>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton centered>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <div>
              <Spinner animation="border" size="xl" variant='pallet-1' />
            </div>
            <div className='fs-4 mt-4'>
              Data is processing
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalLoading
