import React, {useEffect, useState} from 'react'
import { Card, CardContent, CardHeader, Typography, Box, TextField, Button } from "@mui/material"
import hc from '../../utils/hc'
import ch from '../../utils/ch'
import SubmitBox from '../fragments/SubmitBox'
import SelectBox from '../fragments/SelectBox'
import checkEVs from '../../utils/checkEVs'
import checkIVs from '../../utils/checkIVs'
import { useMutation } from '@apollo/client'
import { MUTATION_CREATEPOKEMON } from '../../utils/mutations'
import checkItem from '../../utils/checkItem'

export default function AddPokemon ({handleClose}) {
    const [p, setP] = useState([])
    const [pi, setPi] = useState('')
    const [ni, setNi] = useState('')
    const [a, setA] = useState('')
    const [na, setNa] = useState('')
    const [te, setTe] = useState('')
    const [i, setI] = useState('(none)')
    const [m1, setM1] = useState('')
    const [m2, setM2] = useState('')
    const [m3, setM3] = useState('')
    const [m4, setM4] = useState('')
    const [hpEV, setHpEV] = useState(0)
    const [hpIV, setHpIV] = useState(31)
    const [atkEV, setAtkEV] = useState(0)
    const [atkIV, setAtkIV] = useState(31)
    const [defEV, setDefEV] = useState(0)
    const [defIV, setDefIV] = useState(31)
    const [spaEV, setSpaEV] = useState(0)
    const [spaIV, setSpaIV] = useState(31)
    const [sdfEV, setSdfEV] = useState(0)
    const [sdfIV, setSdfIV] = useState(31)
    const [spdEV, setSpdEV] = useState(0)
    const [spdIV, setSpdIV] = useState(31)
    
    const [nL, setNL] = useState([])
    const [aL, setAL] = useState([])
    const [tL, setTL] = useState([])
    const [mL, setML] = useState([])

    const [newPokemon, { error }] = useMutation(MUTATION_CREATEPOKEMON)

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


    function handlePSubmit (e) {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon/' + hc(pi))
            .then(response => response.json())
            .then(json => formConstruct(json))
            .catch(error => alert("Pokemon Not Found. Please Try Again"))
        
        function formConstruct (d) {
            setP(d)

            //Ability List
            let a_list = [];
            for (let i = 0; i < d.abilities.length; i++) {
                a_list.push(d.abilities[i].ability.name)
            }
            setAL(a_list)
            
            //Move List
            let m_list = [];
            for (let i = 0; i < d.moves.length; i++) {
                m_list.push(d.moves[i].move.name)
                
            }
            setML(m_list.sort())
        }
    }
    
    const handleNSubmit = async (e) => {
        e.preventDefault()
        // console.log(ni, a, na, te, ch(i))
        // console.log(m1, m2, m3 ,m4)
        // console.log(hpIV, atkIV)

        let ev = checkEVs(hpEV, atkEV, defEV, spaEV, sdfEV, spdEV)
        let iv = checkIVs(hpIV, atkIV, defIV, spaIV, sdfIV, spdIV)
        let it
        if (i) {
            it = checkItem (hc(i))
        } else {
            it = true
        }
        

        if (!ev || !iv || !it) {
            return
        }
        
        try {
            const {data} = await newPokemon({
                variables: {
                    name: hc(pi),
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
            console.log(error, 'Pokemon could not be created')
        }
        //console.log(ni + ' was added' )
        await handleClose()
    }

    function handleInput(e){
        e.preventDefault();
        setPi(e.target.value)
    }
    
    return (
        <div>
            <Card sx={{bgcolor: "#eae2b7"}}>
                <CardHeader
                    title={"Create a New Pokemon"} className='text-center'
                    />
                <CardContent>
                    <div>
                        <div className="flex-row justify-center">
                            <Box>
                                <form onSubmit={handlePSubmit}>
                                    <Box> 
                                        <div>
                                            <Typography variant='h5'>Pokemon:</Typography>
                                            <TextField variant="outlined" sx={{marginLeft: '10px', width: 250}} size='small' onInput={handleInput}/>
                                        </div>
                                    </Box>
                                </form>
                            </Box>

                        </div>
                        <div className="flex-row justify-center">
                            <Box>
                                {p.abilities &&
                                    <form onSubmit={handleNSubmit}>
                                        <SubmitBox w={250} label={"Nickname"} setSub={setNi} />
                                        <div className="flex-row justify-center">
                                            <SelectBox label={"Ability"} list={aL} val={a} setSub={setA}/>
                                            <SelectBox label={"Nature"} list={nL} val={na} setSub={setNa}/>
                                            <SelectBox label={"Tera Type"} list={tL} val={te} setSub={setTe}/>
                                            <SubmitBox w={250} label={"Held Item"} setSub={setI}/>
                                        </div>
                                        <div className="flex-row justify-center">
                                            <SelectBox label={"Move 1"} list={mL} val={m1} setSub={setM1}/>
                                            <SelectBox label={"Move 2"} list={mL} val={m2} setSub={setM2}/>
                                            <SelectBox label={"Move 3"} list={mL} val={m3} setSub={setM3}/>
                                            <SelectBox label={"Move 4"} list={mL} val={m4} setSub={setM4}/>
                                        </div>
                                        <div className="flex-row justify-center">
                                            <SubmitBox w={100} label={"HP EV"} setSub={setHpEV} />
                                            <SubmitBox w={100} label={"ATK EV"} setSub={setAtkEV} />
                                            <SubmitBox w={100} label={"DEF EV"} setSub={setDefEV} />
                                            <SubmitBox w={100} label={"SPA EV"} setSub={setSpaEV} />
                                            <SubmitBox w={100} label={"SDF EV"} setSub={setSdfEV} />
                                            <SubmitBox w={100} label={"SPD EV"} setSub={setSpdEV} />
                                        </div>
                                        <div className="flex-row justify-center">
                                            <SubmitBox w={100} label={"HP IV"} setSub={setHpIV} />
                                            <SubmitBox w={100} label={"ATK IV"} setSub={setAtkIV} />
                                            <SubmitBox w={100} label={"DEF IV"} setSub={setDefIV} />
                                            <SubmitBox w={100} label={"SPA IV"} setSub={setSpaIV} />
                                            <SubmitBox w={100} label={"SDF IV"} setSub={setSdfIV} />
                                            <SubmitBox w={100} label={"SPD IV"} setSub={setSpdIV} />
                                        </div>
                                        
                                        <br></br>
                                        <div className="flex-row justify-center">
                                            <Button variant="contained" onClick={handleNSubmit}>Add Pokemon</Button>
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