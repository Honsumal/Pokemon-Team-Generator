import { Card, CardHeader } from "@mui/material";
import React from "react";

export default function EditPokemon ({pokemon}){
    let p = pokemon
    console.log(p)

    return(
        <div>
            <Card sx={{bgcolor: '#eae2b7'}}>
                <CardHeader
                    title={"Edit"+ "Nick" + " (" + "Name" + ")"}
                    className='text-center'
                />
            </Card>
        </div>
    )
}