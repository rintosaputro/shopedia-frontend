import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { BiCheckCircle } from 'react-icons/bi'

const ModalNotifSuccess = ({message}) => {
   const [show,setShow] = useState(false)
   const handleClose = ()=> setShow(false)
   useEffect(()=>{
      console.log(message)
      if(message){
         setShow(true)
      } else {
         setShow(false)
      }
   },[message])
  return (
      <>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header id='modal-notif'>
          <Modal.Title id="contained-modal-title-vcenter" className='text-center'> 
            <div className='text-center'>
               <div className='notif-icon'>
                  <BiCheckCircle />
               </div>
            </div>
          </Modal.Title>
        </Modal.Header>
         <Modal.Body className='py-5'>
            <div className='text-center'>
               <div className='fs-1 pps fw-bold text-pallet-1'>Great!</div>
               <div className='fs-4 pps  text-pallet-1'>{message}</div>
            </div>
         </Modal.Body>
      </Modal>
      </>
  )
}

export default ModalNotifSuccess
