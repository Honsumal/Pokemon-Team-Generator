import { Card, CardContent, CardHeader, Typography, Box, Modal, Button } from "@mui/material";
import React, {useEffect, useState} from "react";
import ch from "../../../utils/ch";
import hpCalc from "../../../utils/hpCalc";
import statCalc from "../../../utils/statCalc";
import EditPokemon from "../EditPokemon";

export default function PokeCard (pokemon) {
    let p = pokemon.p

    
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

    const [hp, setHp] = useState('0')
    const [atk, setAtk] = useState('0')
    const [def, setDef] = useState('0')
    const [spa, setSpa] = useState('0')
    const [sdf, setSdf] = useState('0')
    const [spd, setSpd] = useState('0')

    const [open, setOpen] = useState(false);
    const handleOpenEdit = () => setOpen(true);
    const handleCloseEdit = () => setOpen(false);

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
                        setHp(hpCalc(list[i].base_stat, p.hpEV, p.hpIV));
                        //console.log(hp)
                        break
                    case 'attack':
                        setAtk(statCalc(list[i].base_stat, p.atkEV, p.atkIV, p.nature, "atk"));
                        break
                    case 'defense':
                        setDef(statCalc(list[i].base_stat, p.defEV, p.defIV, p.nature, "def"));
                        break
                    case 'special-attack':
                        setSpa(statCalc(list[i].base_stat, p.spaEV, p.spaIV, p.nature, "spa"));
                        break
                    case 'special-defense':
                        setSdf(statCalc(list[i].base_stat, p.spdefEV, p.spdefIV, p.nature, "sdf"));
                        break
                    default:
                        setSpd(statCalc(list[i].base_stat, p.spdEV, p.spdIV, p.nature, "spd"));
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
                    <Typography>
                        HP: <b>{hp}</b> [EV: {p.hpEV} | IV: {p.hpIV}]
                    </Typography>
                    <Typography>
                        Attack: <b>{atk}</b> [EV: {p.atkEV} | IV: {p.atkIV}]
                    </Typography>
                    <Typography>
                        Defence: <b>{def}</b> [EV: {p.defEV} | IV: {p.defIV}]
                    </Typography>
                    <Typography>
                        Special Attack: <b>{spa}</b> [EV: {p.spaEV} | IV: {p.spaIV}]
                    </Typography>
                    <Typography>
                        Special Defence: <b>{sdf}</b> [EV: {p.spdefEV} | IV: {p.spdefIV}]
                    </Typography>
                    <Typography>
                        Speed: <b>{spd}</b> [EV: {p.spdEV} | IV: {p.spdIV}]
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
                <div className="flex-row justify-center">
                    <Button variant="contained" onClick={handleOpenEdit}>Edit Pokemon</Button>
                    <Box>
                        <Modal
                            open={open}
                            onClose={handleCloseEdit}
                            sx={{bgcolor: '#f77f00'}}
                            >
                                <Box sx={styleModal}>
                                    <EditPokemon p = {pokemon} />
                                </Box>
                        </Modal>
                    </Box>
                </div>
            </CardContent>
        </Card>
    )
}