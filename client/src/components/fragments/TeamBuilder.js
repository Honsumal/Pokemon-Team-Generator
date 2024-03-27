import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import Pokemon from '../js/pokemon'
import Team from '../js/team'

export default function TeamBuilder () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        //console.log("stingray")
        setOpen(true);
    }; 
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return(
        <div className='container'>
            <br></br>
            <h1 className='centered'>Hello</h1>
            <br></br>

            <Box className='centered'>
                <Button variant="contained" onClick={handleOpen}>New Team</Button>
            </Box>

            <Modal
                open = {open}
                onClose = {handleClose}
                aria-labelledby="newteammaker"
                aria-describedby="new team button"
            >
                <Box sx={style}>
                    <Typography>
                        Chandelier
                    </Typography>

                </Box>
            </Modal>
            <br></br>
        </div>
    )
}