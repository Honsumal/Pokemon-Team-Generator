import React from 'react'
import {Box, Typography, TextField} from '@mui/material'

export default function SubmitBox ({w, label, setSub, def}) {
    // const [input, setInput] = useState('')

    function handleInput (e) {
        e.preventDefault()
        //console.log(e)
        setSub(e.target.value)
    }

    return (
        <div className="flex-row justify-center">
            <Box sx={{margin:0.5}}> 
                <div>
                    <Typography variant='h5'>{label}:</Typography>
                    <TextField variant="outlined" sx={{marginLeft: '10px', width: w}} size='small' onInput={handleInput} defaultValue={def}/>
                </div>
            </Box>
        </div>
    )
}