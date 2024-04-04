import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import React from "react";
import ch from "../../utils/ch";

export default function PokeCard (pokemon) {
    let p = pokemon.p
    return(
        <Card sx={{bgcolor: "#eae2b7"}}>
            <CardHeader
                title={p.nickname + " (" + ch(p.name) + ")"} className="text-center"
            />
            <CardContent>
                <div className="flex-row justify-center">
                    <Box sx={{margin: 1}}>
                        <Typography variant="body2">
                            Ability: {ch(p.ability)}
                        </Typography>
                    </Box>
                    <Box sx={{margin: 1}}>
                        <Typography variant="body2">
                            Item: {ch(p.item)}
                        </Typography>
                    </Box>
                    <Box sx={{margin: 1}}>
                        <Typography variant="body2">
                            Nature: {ch(p.nature)}
                        </Typography>
                    </Box>
                    <Box sx={{margin: 1}}>
                        <Typography variant="body2">
                            Tera Type: {ch(p.tera)}
                        </Typography>
                    </Box>
                </div>
                <Typography>
                    STATS
                </Typography>
                <Typography variant="h6" className="text-center">
                    Moveset
                </Typography>
                <div className="flex-row justify-center">
                    <Box sx={{padding: 2, margin: 2, border: "1px solid #000"}}>
                        <Typography variant="body2">
                            {ch(p.move1)}
                        </Typography>
                    </Box>
                    <Box sx={{padding: 2, margin: 2, border: "1px solid #000"}}>
                        <Typography variant="body2">
                            {ch(p.move2)}
                        </Typography>
                    </Box>
                    <Box sx={{padding: 2, margin: 2, border: "1px solid #000"}}>
                        <Typography variant="body2">
                            {ch(p.move3)}
                        </Typography>
                    </Box>
                    <Box sx={{padding: 2, margin: 2, border: "1px solid #000"}}>
                        <Typography variant="body2">
                            {ch(p.move4)}
                        </Typography>
                    </Box>
                </div>

            </CardContent>
        </Card>
    )
}