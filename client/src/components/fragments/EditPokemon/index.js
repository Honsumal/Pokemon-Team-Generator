import { Card, CardHeader, CardContent, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ch from "../../../utils/ch";
import hc from "../../../utils/hc";
import SubmitBox from "../SubmitBox";
import SelectBox from "../SelectBox";
import { useMutation } from "@apollo/client";
import { MUTATION_EDITPOKEMON, MUTATION_EDITPOKEMONINTEAM } from "../../../utils/mutations";

export default function EditPokemon ({pokemon, handleClose}){
    let p = pokemon.p
    const [editPokemon, {error}] = useMutation(MUTATION_EDITPOKEMON);
    const [editTeam, {error2} ] = useMutation(MUTATION_EDITPOKEMONINTEAM);

    const [ni, setNi] = useState(p.nickname);
    const [a, setA] = useState(p.ability);
    const [na, setNa] = useState(p.nature);
    const [te, setTe] = useState(p.tera);
    const [i, setI] = useState(p.item);
    const [m1, setM1] = useState(p.move1);
    const [m2, setM2] = useState(p.move2);
    const [m3, setM3] = useState(p.move3);
    const [m4, setM4] = useState(p.move4);
    const [hpEV, setHpEV] = useState(p.hpEV);
    const [hpIV, setHpIV] = useState(p.hpIV);
    const [atkEV, setAtkEV] = useState(p.atkEV);
    const [atkIV, setAtkIV] = useState(p.atkIV);
    const [defEV, setDefEV] = useState(p.defEV);
    const [defIV, setDefIV] = useState(p.defIV);
    const [spaEV, setSpaEV] = useState(p.spaEV);
    const [spaIV, setSpaIV] = useState(p.spaIV);
    const [sdfEV, setSdfEV] = useState(p.spdefEV);
    const [sdfIV, setSdfIV] = useState(p.spdefIV);
    const [spdEV, setSpdEV] = useState(p.spdEV);
    const [spdIV, setSpdIV] = useState(p.spdIV);
    
    const [nL, setNL] = useState([])
    const [aL, setAL] = useState([])
    const [tL, setTL] = useState([])
    const [mL, setML] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/nature')
            .then(response => response.json())
            .then(json => genNatureList(json.results))
            .catch(error => console.error(error))
        
        function genNatureList (data) {
            let nature_list = []
            for (let i = 0; i < data.length; i++) {
                nature_list.push(data[i].name)
            }
            setNL(nature_list)
        }
    }, [])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(json => genTypeList(json.results))
            .catch(error => console.error(error))

        function genTypeList(data) {
            let type_list = []
            for (let i = 0; i < data.length - 2; i++) {
                type_list.push(data[i].name)
            }
            type_list.push("stellar")
            setTL(type_list)
        }
    }, [])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + hc(p.name))
        .then(response => response.json())
        .then(json => formConstruct(json))
        .catch(error => alert("Pokemon Not Found. Please Try Again"))
    
    function formConstruct (d) {
        //Ability List
        let a_list = [];
        for (let i = 0; i < d.abilities.length; i++) {
            a_list.push(d.abilities[i].ability.name)
        }
        setAL(a_list)
        
        //Move List
        let m_list = [];
        m_list.push('(none)')
        for (let i = 0; i < d.moves.length; i++) {
            m_list.push(d.moves[i].move.name)
            
        }
        setML(m_list.sort())
    }

    }, [p.name])

    async function handleSubmit () {
        console.log("submitted")
        try {
            const {data} = await editPokemon({
                variables: {
                    id: p._id,
                    name: p.name,
                    nickname: ni,
                    ability: a,
                    move1: m1,
                    move2: m2 || "(none)",
                    move3: m3 || "(none)",
                    move4: m4 || "(none)",
                    item: ch(i) || "(none)",
                    nature: na,
                    hpEv: parseInt(hpEV),
                    atkEv: parseInt(atkEV),
                    defEv: parseInt(defEV),
                    spaEv: parseInt(spaEV),
                    spdefEv: parseInt(sdfEV),
                    spdEv: parseInt(spdEV),
                    hpIv: parseInt(hpIV),
                    atkIv: parseInt(atkIV),
                    defIv: parseInt(defIV),
                    spaIv: parseInt(spaIV),
                    spdefIv: parseInt(sdfIV),
                    spdIv: parseInt(spdIV),
                    tera: te
                }
            });
        } catch (err) {
            console.error(err);
            console.log(error, 'Pokemon could not be edited')
        }

        try {
            const {data} = await editTeam({
                variables: {
                    pokemonId: p._id,
                    name: p.name,
                    nickname: ni,
                    ability: a,
                    move1: m1,
                    move2: m2 || "(none)",
                    move3: m3 || "(none)",
                    move4: m4 || "(none)",
                    item: ch(i) || "(none)",
                    nature: na,
                    hpEv: parseInt(hpEV),
                    atkEv: parseInt(atkEV),
                    defEv: parseInt(defEV),
                    spaEv: parseInt(spaEV),
                    spdefEv: parseInt(sdfEV),
                    spdEv: parseInt(spdEV),
                    hpIv: parseInt(hpIV),
                    atkIv: parseInt(atkIV),
                    defIv: parseInt(defIV),
                    spaIv: parseInt(spaIV),
                    spdefIv: parseInt(sdfIV),
                    spdIv: parseInt(spdIV),
                    tera: te
                }
            });
        } catch (err) {
            console.error(err);
            console.log(error2, 'Pokemon could not be edited')
        }

        handleClose()
    }

    return(
        <div>
            <Card sx={{bgcolor: '#eae2b7'}}>
                <CardHeader
                    title={"Edit: "+ p.nickname + " (" + ch(p.name) + ")"}
                    className='text-center'
                />
                <CardContent>
                    <div>
                        <div className="flex-row justify-center">
                            <Box>
                                {mL.length &&
                                    <form onSubmit={handleSubmit}>
                                        <SubmitBox w={250} label={"Nickname"} setSub={setNi} def={p.nickname}/>
                                        <div className="flex-row justify-center">
                                            <SelectBox label={"Ability"} list={aL} val={a} setSub={setA}/>
                                            <SelectBox label={"Nature"} list={nL} val={na} setSub={setNa}/>
                                            <SelectBox label={"Tera Type"} list={tL} val={te} setSub={setTe}/>
                                            <SubmitBox label={"Held Item"} setSub={setI} def={ch(p.item)}/>
                                        </div>
                                        <div className="flex-row justify-center">
                                            <SelectBox label={"Move 1"} list={mL} val={m1} setSub={setM1}/>
                                            <SelectBox label={"Move 2"} list={mL} val={m2} setSub={setM2}/>
                                            <SelectBox label={"Move 3"} list={mL} val={m3} setSub={setM3}/>
                                            <SelectBox label={"Move 4"} list={mL} val={m4} setSub={setM4}/>
                                        </div>
                                        <div className="flex-row justify-center">
                                            <SubmitBox w={100} label={"HP EV"} setSub={setHpEV} def={p.hpEV}/>
                                            <SubmitBox w={100} label={"ATK EV"} setSub={setAtkEV} def={p.atkEV}/>
                                            <SubmitBox w={100} label={"DEF EV"} setSub={setDefEV} def={p.defEV}/>
                                            <SubmitBox w={100} label={"SPA EV"} setSub={setSpaEV} def={p.spaEV}/>
                                            <SubmitBox w={100} label={"SDF EV"} setSub={setSdfEV} def={p.spdefEV}/>
                                            <SubmitBox w={100} label={"SPD EV"} setSub={setSpdEV} def={p.spdEV}/>
                                        </div>
                                        <div className="flex-row justify-center">
                                            <SubmitBox w={100} label={"HP IV"} setSub={setHpIV} def={p.hpEV}/>
                                            <SubmitBox w={100} label={"ATK IV"} setSub={setAtkIV} def={p.atkIV}/>
                                            <SubmitBox w={100} label={"DEF IV"} setSub={setDefIV} def={p.defIV}/>
                                            <SubmitBox w={100} label={"SPA IV"} setSub={setSpaIV} def={p.spaIV}/>
                                            <SubmitBox w={100} label={"SDF IV"} setSub={setSdfIV} def={p.spdefIV}/>
                                            <SubmitBox w={100} label={"SPD IV"} setSub={setSpdIV} def={p.spdIV}/>
                                        </div>
                                        
                                        <br></br>
                                        <div className="flex-row justify-center">
                                            <Button variant="contained" onClick={handleSubmit}>Edit Pokemon</Button>
                                        </div>                              

                                    </form>
                                }
                            </Box>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}