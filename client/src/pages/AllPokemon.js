import React from 'react';
import { QUERY_GETALLPOKEMON } from '../utils/queries';
import { useQuery } from '@apollo/client';
import PokemonHome from '../components/PokemonHome';

export default function AllPokemon () {
    const { loading, data } = useQuery(QUERY_GETALLPOKEMON);
    const pokemon = data?.getAllPokemon || [];
       
    return(
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <PokemonHome
                            pokemon={pokemon}
                            title="Here are your currently saved Pokemon..."
                        />
                    )}
                </div>
            </div> 
        </main>
    )
}