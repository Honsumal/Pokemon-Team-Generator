import { gql } from '@apollo/client'

export const QUERY_GETALLPOKEMON = gql`
query GetAllPokemon {
    getAllPokemon {
      _id
      ability
      atkEV
      defEV
      hpEV
      item
      move1
      move2
      move3
      move4
      name
      nature
      nickname
      spaEV
      spdEV
      spdefEV
      tera
    }
}
`

export const QUERY_GETONEPOKEMON = gql`
query GetOnePokemon($id: ID!) {
    getOnePokemon(_id: $id) {
      _id
      ability
      atkEV
      defEV
      hpEV
      item
      move1
      move2
      move3
      move4
      name
      nature
      nickname
      spaEV
      spdEV
      spdefEV
      tera
    }
}
`

export const QUERY_GETALLTEAMS = gql`
query GetAllTeams {
    getTeams {
      _id
      nickname
      pokemon {
        _id
        ability
        atkEV
        defEV
        hpEV
        item
        move1
        move2
        move3
        move4
        name
        nature
        nickname
        spaEV
        spdefEV
        spdEV
        tera
      }
    }
  }
`