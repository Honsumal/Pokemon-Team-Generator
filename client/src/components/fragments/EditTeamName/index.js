import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { MUTATION_EDITTEAMNAME } from '../../../utils/mutations';
import {Card, CardHeader, Box, Button, TextField, Typography} from '@mui/material'

export default function EditTeamName ({team, hC}) {
    const [name, setName] = useState('')
    const [newName, {error}] = useMutation(MUTATION_EDITTEAMNAME);

    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }


    const handleSubmit= async (e) => {
        e.preventDefault()
        try {
            const {data} = await newName({
                variables: {
                    id: team._id,
                    nickname: name
                }
            })
        } catch (err) {
            console.error(err);
            console.log(error, 'Team Name could not be changed')
        }
        hC()
    }
    
    return(
        <div>
            <Card sx={{bgcolor: '#eae2b7'}}>
                <CardHeader
                    title={"Change Team Name:"}
                    className='flex-row justify-center'
                />
                <form onSubmit={handleSubmit} className='flex-row justify-center'> 
                    <Box className='flex-row justify-center'>
                        <Typography variant='h5'>New Team Name:</Typography>
                        <TextField variant="outlined" sx={{marginLeft: 1, marginRight: 1}} size='small' onInput={handleInput}/>    
                    </Box>
                    <Button variant='contained' onClick={handleSubmit}>Change Team Name</Button>
                </form>
                <br></br>                    
            </Card>
        </div>
    )
}