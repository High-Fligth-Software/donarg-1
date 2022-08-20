import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
export const ModalComponent = (props) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform:'translate(-50%, -50%)',
        width: 400, 
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: "20px",
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
      useEffect(()=>{
        setOpen(props.abrir);
      },[props.abrir])
  return (
    <div>
     <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style}}>
            {props.children}
        </Box>
      </Modal>
    </div>
  )
}
