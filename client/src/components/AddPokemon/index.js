import React, {useEffect, useState} from 'react'
import { Card, CardContent, CardHeader, Typography, Box, TextField, Button } from "@mui/material"
import hc from '../../utils/hc'
import ch from '../../utils/ch'
import SubmitBox from '../SubmitBox'
import SelectBox from '../SelectBox'

export default function AddPokemon (team) {
    const t = team.team

    const [p, setP] = useState([])
    const [pi, setPi] = useState('')
    const [ni, setNi] = useState('')
    const [a, setA] = useState('')
    const [na, setNa] = useState('')
    const [te, setTe] = useState('')
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
    
    function handleNSubmit (e) {
        e.preventDefault()
        console.log(ni, a)
    }

    function handleInput(e){
        e.preventDefault();
        setPi(e.target.value)
    }
    
    return (
        <div>
            <Card sx={{bgcolor: "#eae2b7"}}>
                <CardHeader
                    title={'Add a Pokemon to ' + t.nickname} className='text-center'
                    />
                <CardContent>
                    <div>
                        <div className="flex-row justify-center">
                            <Box>
                                <form onSubmit={handlePSubmit}>
                                    <span><Typography variant='h5'>Pokemon:</Typography></span>
                                    <span><TextField variant="outlined" sx={{marginLeft: '10px'}} size='small' onInput={handleInput}/></span>
                                </form>
                            </Box>

                        </div>
                        <div className="flex-row justify-center">
                            <Box>
                                {p.abilities &&
                                    <form onSubmit={handleNSubmit}>
                                        <SubmitBox label={"Nickname"} setSub={setNi} />

                                        <SelectBox label={"Ability"} list={aL} val={a} setSub={setA}/>
                                        <SelectBox label={"Nature"} list={nL} val={na} setSub={setNa}/>
                                        <SelectBox label={"Tera Type"} list={tL} val={te} setSub={setTe}/>

                                        <SelectBox label={"Move 1"} list={mL} val={m1} setSub={setM1}/>
                                        <SelectBox label={"Move 2"} list={mL} val={m2} setSub={setM2}/>
                                        <SelectBox label={"Move 3"} list={mL} val={m3} setSub={setM3}/>
                                        <SelectBox label={"Move 4"} list={mL} val={m4} setSub={setM4}/>

                                        
                                        <Button variant="contained" onClick={handleNSubmit}>Add Pokemon</Button>
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