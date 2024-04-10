const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon {
        _id: ID
        name: String
        nickname: String!
        ability: String!
        move1: String!
        move2: String!
        move3: String!
        move4: String!
        item: String!
        nature: String!
        hpEV: Int!
        atkEV: Int!
        defEV: Int!
        spaEV: Int!
        spdefEV: Int!
        spdEV: Int!
        hpIV: Int!
        atkIV: Int!
        defIV: Int!
        spaIV: Int!
        spdefIV: Int!
        spdIV: Int!
        
        tera: String!
    }

    input InputPokemon {
        _id: ID
        name: String!
        nickname: String!
        ability: String!
        move1: String!
        move2: String!
        move3: String!
        move4: String!
        item: String!
        nature: String!
        hpEV: Int!
        atkEV: Int!
        defEV: Int!
        spaEV: Int!
        spdefEV: Int!
        spdEV: Int!
        hpIV: Int!
        atkIV: Int!
        defIV: Int!
        spaIV: Int!
        spdefIV: Int!
        spdIV: Int!
        tera: String!
    }

    type Team{
        _id: ID
        nickname: String!
        pokemon: [Pokemon]
    }

    input InputTeam{
        _id: ID
        nickname: String!
        pokemon: [InputPokemon]
    }

    type Query {
        getOnePokemon (_id: ID!): Pokemon!
        getAllPokemon: [Pokemon]!
        getTeams: [Team]!
    }

    type Mutation {
        createPokemon (name: String!, nickname: String!, ability: String!, move1: String!, move2: String, move3: String, move4: String, item: String, nature: String!, hpEV: Int, atkEV: Int, defEV: Int, spaEV: Int, spdefEV: Int, spdEV: Int, hpIV: Int, atkIV: Int, defIV: Int, spaIV: Int, spdefIV: Int, spdIV: Int, tera: String): Pokemon
        createTeam (nickname: String!): Team

        deletePokemon (_id: ID!): Pokemon
        deleteTeam (_id: ID!): Team

        addPokemontoTeam (_id: ID!, pokemonID: ID!): Team
        removePokemonfromTeam (_id: ID!, pokemonID: ID!): Team
    }
`
module.exports = typeDefs