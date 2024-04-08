import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import React, {useEffect, useState} from "react";
import ch from "../../utils/ch";
import hpCalc from "../../utils/hpCalc";
import statCalc from "../../utils/statCalc";

export default function PokeCard (pokemon) {
    let p = pokemon.p

    const [hp, setHp] = useState('0')
    const [atk, setAtk] = useState('0')
    const [def, setDef] = useState('0')
    const [spa, setSpa] = useState('0')
    const [sdf, setSdf] = useState('0')
    const [spd, setSpd] = useState('0')

    useEffect(() => {
        function findStats () {
            fetch('https://pokeapi.co/api/v2/pokemon/' + p.name)
                .then(response => response.json())
                .then(json => bstConstructor(json.stats))
                .catch(error => console.error(error))
        }

        function bstConstructor(list) {
            for (let i = 0; i < list.length; i++) {
    
                switch (list[i].stat.name) {
                    case 'hp':
                        setHp(hpCalc(list[i].base_stat, p.hpEV));
                        //console.log(hp)
                        break
                    case 'attack':
                        setAtk(statCalc(list[i].base_stat, p.atkEV, p.nature, "atk"));
                        break
                    case 'defense':
                        setDef(statCalc(list[i].base_stat, p.defEV, p.nature, "def"));
                        break
                    case 'special-attack':
                        setSpa(statCalc(list[i].base_stat, p.spaEV, p.nature, "spa"));
                        break
                    case 'special-defense':
                        setSdf(statCalc(list[i].base_stat, p.spdefEV, p.nature, "sdf"));
                        break
                    default:
                        setSpd(statCalc(list[i].base_stat, p.spdEV, p.nature, "spd"));
                        break
                }
            }
        }

        findStats();
        
    },[p]);

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
                <Typography variant="h6" className="text-center">
                   Stats
                </Typography>
                <div>
                    {/* {Put Graph here is possible} */}
                    <Typography>
                        HP: {hp}
                    </Typography>
                    <Typography>
                        Attack: {atk}
                    </Typography>
                    <Typography>
                        Defence: {def}
                    </Typography>
                    <Typography>
                        Special Attack: {spa}
                    </Typography>
                    <Typography>
                        Special Defence: {sdf}
                    </Typography>
                    <Typography>
                        Speed: {spd}
                    </Typography>
                </div>
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