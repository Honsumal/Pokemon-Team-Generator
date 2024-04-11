import React from 'react';

const PokemonHome = ({ pokemon, title }) => {
    if (!pokemon.length) {
        return <h3>No Pokemon Saved</h3>
    } else {
        return (
            <div>
                <h3 className="text-primary">{title}</h3>
                <div className="flex-row justify-space-between my-4">
                    {pokemon &&
                        pokemon.map((p) => (
                            <h1>{p.name}</h1>
                        ))}
                </div>
            </div>
        )
    }
}

export default PokemonHome;