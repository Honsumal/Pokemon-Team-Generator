import React from 'react';
import {Box, Typography, Select, MenuItem} from '@mui/material'
import ch from '../../utils/ch';

export default function SelectBox({label, list, val, setSub}) {
    function handleInput(e) {
        e.preventDefault()
        setSub(e.target.value)
    }
    return(
        <div className="flex-row justify-center">
            <Box sx={{margin: 0.5}}>
                <div>
                    <Typography variant='h5'>{label}</Typography>
                    <Select
                        label={label}
                        onChange={handleInput}
                        value={val}
                        sx={{width: 200}}
                    >
                        {list.length && 
                            list.map((i) => {
                                return(
                                    <MenuItem value={i}>{ch(i)}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </div>
            </Box>
        </div>
    )
}