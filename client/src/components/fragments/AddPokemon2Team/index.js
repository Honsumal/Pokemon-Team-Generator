import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { QUERY_GETALLPOKEMON } from '../../../utils/queries'
import {Card, CardHeader, Box, Button} from '@mui/material'
import SPokeCard from '../SPokeCard';
import { MUTATION_ADDPOKEMONTOTEAM } from '../../../utils/mutations';

export default function AddPokemon2Team (team) {
    const { loading, data } = useQuery(QUERY_GETALLPOKEMON);
    const p = data?.getAllPokemon || [];
    
    const [addPokemon, {error}] = useMutation(MUTATION_ADDPOKEMONTOTEAM)

    async function handleAdd (id) {
         console.log(team.team._id, id)
        try {
            const {data} = await addPokemon({
                variables: {
                    id: team.team._id,
                    pokemonId: id
                }
            });
        } catch (err) {
            console.error(err);
            console.log(error, 'Pokemon could not be added')
        }
        window.location.reload()
    }

    return (
        <div>
            <Card sx={{bgcolor: "#eae2b7"}}>
                <CardHeader
                    title={"Add a Pokemon to " + team.team.nickname}
                    className='flex-row justify-center'
                />
                {loading ? (
                    <div>Loading ...</div>
                ) : (
                    <div className='flex-row justify-center'>
                        {p.map((pk) => {
                            return(
                                <div className='flex-row justify-center' key={pk._id}>
                                    <Box margin={0.5} key={pk._id} className='flex-column justify-center' >
                                        <SPokeCard pokemon = {pk} />
                                        <Button variant="contained" onClick={() => handleAdd(pk._id)}>Add Pokemon to Team</Button>
                                    </Box>
                                </div>

                            )

                        })}
                    </div>
                )}
                <br></br>

            </Card>
        </div>
    )

}