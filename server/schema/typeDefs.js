const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon {
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
        tera: String!
    }

    type Team{
        _id: ID
        nickname: String!
        pk1: [Pokemon]
        pk2: [Pokemon]
        pk3: [Pokemon]
        pk4: [Pokemon]
        pk5: [Pokemon]
        pk6: [Pokemon]
    }

    Input InputTeam{
        _id: ID
        nickname: String!
        pk1: [Pokemon]
        pk2: [Pokemon]
        pk3: [Pokemon]
        pk4: [Pokemon]
        pk5: [Pokemon]
        pk6: [Pokemon]
    }

    type Query {
        getOnePokemon: Pokemon
        getAllPokemon: [Pokemon]
        getTeams: [Team]
    }

    type Mutation {
        createPokemon (name: String!, nickname: String!, ability: String!, move1: String!, move2: String, move3: String, move4: String, item: String, nature: String!, hpEV: Int, atkEV: Int, defEV: Int, spaEV: Int, spdefEV: Int, spdEV: Int, tera: String): Pokemon
        createTeam (nickname: String!): Team

        addPokemontoTeam (_id: ID!, pokemonID: ID!, slot: Int!): Team
        removePokemonfromTeam (_id: ID!, pokemonID: ID!): Team
    }
`
module.exports = typeDefs