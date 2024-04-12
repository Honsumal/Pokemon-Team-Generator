const {
    Pokemon,
    Team
} = require('../models')

// const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        getOnePokemon: async (parent, { _id}) => {
            // const {_id} = args
            const onePokemon = await Pokemon.findOne({ _id: _id })

            // if(!onePokemon) {
            //     throw new AuthenticationError('Cannot find this Pokemon')
            // }

            return onePokemon
        },

        getAllPokemon: async () => {
            //const allPokemon = Pokemon.find()

            // if(!allPokemon) {
            //     throw new AuthenticationError('Aiyah')
            // }

            return Pokemon.find()
        },

        getTeams: async () => {

            // if(!allTeams) {
            //     throw new AuthenticationError('Aiyah')
            // }

            return Team.find()
        }
    },
    Mutation: {
        createPokemon: async (parent, {name, nickname, ability, move1, move2, move3, move4, item, nature, hpEV, atkEV, defEV, spaEV, spdefEV, spdEV, hpIV, atkIV, defIV, spaIV, spdefIV, spdIV, tera}) => {
            const pokemon = Pokemon.create({
                name: name,
                nickname: nickname,
                ability: ability,
                move1: move1,
                move2: move2,
                move3: move3,
                move4: move4,
                item: item,
                nature: nature,
                hpEV: hpEV,
                atkEV: atkEV,
                defEV: defEV,
                spaEV: spaEV,
                spdefEV: spdefEV,
                spdEV: spdEV,
                hpIV: hpIV,
                atkIV: atkIV,
                defIV: defIV,
                spaIV: spaIV,
                spdefIV: spdefIV,
                spdIV: spdIV,
                tera: tera
            })

            // if(!pokemon) {
            //     throw new AuthenticationError('Something went wrong')
            // }

            return(pokemon)
        },

        createTeam: async (parent, {nickname}) => {
            return Team.create({nickname:nickname})

            // if(!team) {
            //     throw new AuthenticationError('Something went wrong') 
            // }
        },

        editPokemon: async (parent, {_id, name, nickname, ability, move1, move2, move3, move4, item, nature, hpEV, atkEV, defEV, spaEV, spdefEV, spdEV, hpIV, atkIV, defIV, spaIV, spdefIV, spdIV, tera}) => {
            const p = Pokemon.findOneAndUpdate(
                { "_id": _id },
                { $set: {
                    name: name,
                    nickname: nickname,
                    ability: ability,
                    move1: move1,
                    move2: move2,
                    move3: move3,
                    move4: move4,
                    item: item,
                    nature: nature,
                    hpEV: hpEV,
                    atkEV: atkEV,
                    defEV: defEV,
                    spaEV: spaEV,
                    spdefEV: spdefEV,
                    spdEV: spdEV,
                    hpIV: hpIV,
                    atkIV: atkIV,
                    defIV: defIV,
                    spaIV: spaIV,
                    spdefIV: spdefIV,
                    spdIV: spdIV,
                    tera: tera                    
                } },
                { new: true, runValidators: true }
            );
            return p
        },
        editTeamName: async (parent, {_id, nickname}) => {
            const t = Team.findOneAndUpdate(
                { "_id": _id },
                { $set: { nickname: nickname} },
                { new: true, runValidators: true }
            );
            return t
        },
        deletePokemon: async (parent, args) => {
            return Pokemon.findOneAndDelete (args, function (err, res) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Deleted Pokemon", res, args);
                }
            })
        },

        deleteTeam: async (parent, args) => {
            return Team.findOneAndDelete (args, function (err, res) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Deleted Team", res, args)
                }
            })
        },

        addPokemontoTeam: async (parent, {_id, pokemonID}) => {
            const query = await Pokemon.findOne({_id: pokemonID})
                .then((data) => queryData = data)

            const add2Team = Team.findOneAndUpdate(
                { _id: _id },
                { $addToSet: { pokemon: query } },
                { new: true, runValidators: true }
            )

            // if (!add2Team) {
            //     throw new AuthenticationError('Pokemon could not be added')
            // }

            return add2Team
        },

        removePokemonfromTeam: async (parent, { _id, pokemonID }) => {
            const team2edit = await Team.findOne( 
                { _id: _id }
            )
            .then((data) => queryData = data)

            let golem = team2edit.pokemon.filter((a) => a._id != pokemonID )

            const rPfT = Team.findOneAndUpdate (
                { _id: _id },
                { $set: {pokemon: golem} },
                { new: true, runValidators: true }
                )

            // if(!rPfT) {
            //     throw new AuthenticationError('Pokemon not removed from team')
            // }
            
            return team2edit.pokemon.filter((a) => a._id == pokemonID )
        }
    }
}

module.exports = resolvers
