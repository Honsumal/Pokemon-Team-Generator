import React, { useState } from 'react';
import { MUTATION_DELETETEAM, MUTATION_DELETEPOKEMON, MUTATION_REMOVEPOKEMONGROMMULTIPLETEAMS } from '../../../utils/mutations';
import {Card, CardHeader, Box, Button, TextField, Typography} from '@mui/material'
import { useMutation } from '@apollo/client';


export default function DeleteConfirmation ({subject, mode}) {
    const [name, setName] = useState('')
    const [deletePokemon, {error}] = useMutation(MUTATION_DELETEPOKEMON);
    const [deleteTeam, {error2}] = useMutation(MUTATION_DELETETEAM);
    const [deletePokemonfromTeams, {error3}] = useMutation(MUTATION_REMOVEPOKEMONGROMMULTIPLETEAMS)

    //console.log(subject.nickname)

    const n = subject.nickname

    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (name === subject.nickname) {
            switch(mode) {
                case "Team":
                    try {
                        const {data} = await deleteTeam({
                            variables: {
                                id: subject._id
                            }
                        })
                    } catch (err) {
                        console.error(err);
                        console.log(error, 'Team could not be deleted')
                    }
                    break
                default:
                    try {
                        const {data} = await deletePokemon({
                            variables: {
                                id: subject._id
                            }
                        })
                    } catch (err) {
                        console.error(err);
                        console.log(error2, 'Pokemon could not be deleted')
                    }

                    try {
                        const {data} = await deletePokemonfromTeams ({
                            variables: {
                                id: subject._id
                            }
                        })
                    } catch (err) {
                        console.error(err);
                        console.log(error3, "Pokemon could not be removed from all teams")
                    }
            }
            window.location.reload()
        } else {
            alert('Your input did not match. Please try again!')
        }
        
        
    }

    return (
        <div>
            <Card sx={{bgcolor: '#eae2b7'}}>
                <CardHeader
                    title={"Delete " + n}
                    className='flex-row justify-center'
                />
                <form onSubmit={handleSubmit} className='flex-row justify-center'> 
                    <Box className='flex-row justify-center'>
                        <Typography variant='h5'>Enter {mode} Nickname to Confirm:</Typography>
                        <TextField variant="outlined" sx={{marginLeft: 1, marginRight: 1}} size='small' onInput={handleInput}/>    
                    </Box>
                    <Button variant='contained' color="error" onClick={handleSubmit}>Delete {mode}</Button>
                </form>
                <br></br>                    
            </Card>

        </div>
    )
}