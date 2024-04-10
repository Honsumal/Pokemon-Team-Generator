import React from 'react'
import {Box, Typography, TextField} from '@mui/material'

export default function SubmitBox ({label, setSub}) {
    // const [input, setInput] = useState('')

    function handleInput (e) {
        e.preventDefault()
        //console.log(e)
        setSub(e.target.value)
    }

    return (
        <div className="flex-row justify-center">
            <Box> 
                <div>
                    <Typography variant='h5'>{label}:</Typography>
                    <TextField variant="outlined" sx={{marginLeft: '10px'}} size='small' onInput={handleInput}/>
                </div>
            </Box>
        </div>
    )
}