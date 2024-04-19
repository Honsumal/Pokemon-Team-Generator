const {
    Pokemon,
    Team
} = require('../models')


const resolvers = {
    Query: {
        getOnePokemon: async (parent, { _id}) => {
            const onePokemon = await Pokemon.findOne({ _id: _id })

            return onePokemon
        },

        getAllPokemon: async () => {
            return Pokemon.find()
        },

        getTeams: async () => {
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

        editPokemoninTeam: async (parent, {pokemonID, name, nickname, ability, move1, move2, move3, move4, item, nature, hpEV, atkEV, defEV, spaEV, spdefEV, spdEV, hpIV, atkIV, defIV, spaIV, spdefIV, spdIV, tera}) => {
            const t = Team.updateMany(
                { },
                { $set: {
                    "pokemon.$[pokemon].name": name,
                    "pokemon.$[pokemon].nickname": nickname,
                    "pokemon.$[pokemon].ability": ability,
                    "pokemon.$[pokemon].move1": move1,
                    "pokemon.$[pokemon].move2": move2,
                    "pokemon.$[pokemon].move3": move3,
                    "pokemon.$[pokemon].move4": move4,
                    "pokemon.$[pokemon].item": item,
                    "pokemon.$[pokemon].nature": nature,
                    "pokemon.$[pokemon].hpEV": hpEV,
                    "pokemon.$[pokemon].atkEV": atkEV,
                    "pokemon.$[pokemon].defEV": defEV,
                    "pokemon.$[pokemon].spaEV": spaEV,
                    "pokemon.$[pokemon].spdefEV": spdefEV,
                    "pokemon.$[pokemon].spdEV": spdEV,
                    "pokemon.$[pokemon].hpIV": hpIV,
                    "pokemon.$[pokemon].atkIV": atkIV,
                    "pokemon.$[pokemon].defIV": defIV,
                    "pokemon.$[pokemon].spaIV": spaIV,
                    "pokemon.$[pokemon].spdefIV": spdefIV,
                    "pokemon.$[pokemon].spdIV": spdIV,
                    "pokemon.$[pokemon].tera": tera
                } },
                  { arrayFilters: [ { "pokemon._id": pokemonID} ] }
            )
            return t
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

            //console.log(golem.length)

            const rPfT = Team.findOneAndUpdate (
                { _id: _id },
                { $set: {pokemon: golem} }
            )

            // if(!rPfT) {
            //     throw new AuthenticationError('Pokemon not removed from team')
            // }
            
            return rPfT
        },

        removePokemonfromMultipleTeams: async (parent, { _id }) => {
            const t = await Team.find({})
                .then((data) => queryData = data)
            
            let pt= []

            for (let i = 0; i < t.length; i++) {

                pt = t[i].pokemon.filter((a) => a._id != _id)

                const rPfMT = await Team.findOneAndUpdate (
                    { _id: t[i]._id},
                    { $set: {pokemon: pt} },
                )
            }
            return t
        }
    }
}

module.exports = resolvers
