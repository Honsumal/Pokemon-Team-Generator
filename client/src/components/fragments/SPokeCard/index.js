import React, { useState } from 'react';
import {Box, Typography, Modal} from '@mui/material'
import ch from '../../../utils/ch';
import PokeCard from '../PokeCard';

export default function SPokeCard ({pokemon}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        width: 240,
        bgcolor: "#eae2b7",
        border: '1px solid #003049',
        boxShadow: 24,
    };

    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: '#003049',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    return(
        <div key={pokemon._id}>
            <Box sx={style} onClick={() => handleOpen()} className="flex-column justify-center">
                <Typography sx={{margin: 0.5}}>{pokemon.nickname}</Typography>
                <Typography sx={{margin: 0.5}}>({ch(pokemon.name)})</Typography>
                <Typography sx={{margin: 0.5}}>Ability: {ch(pokemon.ability)}</Typography>
                <Typography sx={{margin: 0.5}}>Held Item: {ch(pokemon.item)}</Typography>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{bgcolor: '#f77f00'}}
            >
                <Box sx={styleModal}>
                    <PokeCard p={pokemon} />
                </Box>
            </Modal>
        </div>
    )
}