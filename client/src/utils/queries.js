import { gql } from '@apollo/client'

export const QUERY_GETALLPOKEMON = gql`
query GetAllPokemon {
    getAllPokemon {
      _id
      ability
      atkEV
      atkIV
      defEV
      defIV
      hpEV
      hpIV
      item
      move1
      move2
      move3
      move4
      name
      nature
      nickname
      spaEV
      spaIV
      spdEV
      spdIV
      spdefEV
      spdefIV
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
      atkIV
      defEV
      defIV
      hpEV
      hpIV
      item
      move1
      move2
      move3
      move4
      name
      nature
      nickname
      spaEV
      spaIV
      spdEV
      spdIV
      spdefEV
      spdefIV
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
        atkIV
        defEV
        defIV
        hpEV
        hpIV
        item
        move1
        move2
        move3
        move4
        name
        nature
        nickname
        spaEV
        spaIV
        spdefEV
        spdefIV
        spdEV
        spdIV
        tera
      }
    }
  }
`