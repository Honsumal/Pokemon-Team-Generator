import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY_GETALLPOKEMON } from '../../../utils/queries'
import {Card, CardHeader, Box} from '@mui/material'
import SPokeCard from '../SPokeCard';

export default function AddPokemon2Team (team) {
    const { loading, data } = useQuery(QUERY_GETALLPOKEMON);
    const p = data?.getAllPokemon || [];
    
    console.log(team)


    return (
        <div>
            <Card sx={{bgcolor: "#eae2b7"}}>
                <CardHeader
                    title={"Add a Pokemon to " + team.team.nickname}
                />
                {loading ? (
                    <div>Loading ...</div>
                ) : (
                    <div className='flex-row justify-center'>
                        {p.map((pk) => {
                            return(
                                <div className='flex-row justify-center'>
                                    <Box margin={0.5}>
                                        <SPokeCard pokemon = {pk} />
                                        {/* Add Pokemon Button */}
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