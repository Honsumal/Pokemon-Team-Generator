import React, {useState} from 'react';
import {Box, Button, Modal} from '@mui/material'
import AddPokemon from '../AddPokemon';
import SPokeCard from '../fragments/SPokeCard';

const PokemonHome = ({ pokemon, title }) => {
    const styleModal2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        bgcolor: '#003049',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    const [nP, setNP] = useState(false)
    const handleNPOpen = () => setNP(true);
    const handleNPClose = () => setNP(false);

    if (!pokemon.length) {
        return <h3>No Pokemon Saved</h3>
    } else {
        return (
            <div>
                <h3 className="text-primary">{title}</h3>
                <div className="flex-row justify-space-between my-4">
                    {pokemon &&
                        pokemon.map((p) => (
                            <SPokeCard key={p._id} pokemon={p} />
                        ))}
                </div>
                <div className="flex-row justify-center"> 
                    <Box>
                        <Button variant="contained" onClick={handleNPOpen}>Add a New Pokemon</Button>
                    </Box>
                    <Modal
                        open={nP}
                        onClose={handleNPClose}
                        sx={{bgcolor: '#f77f00'}}
                        >
                            <Box sx={styleModal2}>
                                <AddPokemon handleClose={handleNPClose}/>
                            </Box>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default PokemonHome;