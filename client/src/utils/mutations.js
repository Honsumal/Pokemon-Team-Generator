import { gql } from '@apollo/client'

export const MUTATION_ADDPOKEMONTOTEAM = gql`
mutation Mutation($id: ID!, $pokemonId: ID!) {
    addPokemontoTeam(_id: $id, pokemonID: $pokemonId) {
      nickname
      _id
      pokemon {
        _id
        name
      }
    }
}
`

export const MUTATION_CREATEPOKEMON = gql`
mutation Mutation($name: String!, $nickname: String!, $ability: String!, $move1: String!, $nature: String!, $move2: String, $move3: String, $move4: String, $item: String, $hpEv: Int, $atkEv: Int, $defEv: Int, $spaEv: Int, $spdefEv: Int, $spdEv: Int, $hpIv: Int, $atkIv: Int, $defIv: Int, $spaIv: Int, $spdefIv: Int, $spdIv: Int, $tera: String) {
  createPokemon(name: $name, nickname: $nickname, ability: $ability, move1: $move1, nature: $nature, move2: $move2, move3: $move3, move4: $move4, item: $item, hpEV: $hpEv, atkEV: $atkEv, defEV: $defEv, spaEV: $spaEv, spdefEV: $spdefEv, spdEV: $spdEv, hpIV: $hpIv, atkIV: $atkIv, defIV: $defIv, spaIV: $spaIv, spdefIV: $spdefIv, spdIV: $spdIv, tera: $tera) {
    _id
    name
  }
}
`

export const MUTATION_CREATETEAM = gql`
mutation Mutation($nickname: String!) {
    createTeam(nickname: $nickname) {
      nickname
      _id
    }
}
`

export const MUTATION_EDITPOKEMON = gql`
mutation Mutation($id: ID!, $name: String!, $nickname: String!, $ability: String!, $move1: String!, $nature: String!, $move2: String, $move3: String, $move4: String, $item: String, $hpEv: Int, $atkEv: Int, $defEv: Int, $spaEv: Int, $spdefEv: Int, $spdEv: Int, $hpIv: Int, $atkIv: Int, $defIv: Int, $spaIv: Int, $spdefIv: Int, $spdIv: Int, $tera: String) {
  editPokemon(_id: $id, name: $name, nickname: $nickname, ability: $ability, move1: $move1, nature: $nature, move2: $move2, move3: $move3, move4: $move4, item: $item, hpEV: $hpEv, atkEV: $atkEv, defEV: $defEv, spaEV: $spaEv, spdefEV: $spdefEv, spdEV: $spdEv, hpIV: $hpIv, atkIV: $atkIv, defIV: $defIv, spaIV: $spaIv, spdefIV: $spdefIv, spdIV: $spdIv, tera: $tera) {
    _id
    name
    nickname
    ability
    move1
    move2
    move3
    move4
    item
    nature
    hpEV
    atkEV
    defEV
    spaEV
    spdefEV
    spdEV
    hpIV
    atkIV
    defIV
    spaIV
    spdefIV
    spdIV
    tera
  }
}
`

export const MUTATION_EDITTEAMNAME = gql`
mutation Mutation($id: ID!, $nickname: String!) {
  editTeamName(_id: $id, nickname: $nickname) {
    nickname
    _id
  }
}`

export const MUTATION_DELETEPOKEMON = gql`
mutation Mutation($id: ID!) {
    deletePokemon(_id: $id) {
      _id
      name
    }
}
`

export const MUTATION_DELETETEAM = gql`
mutation Mutation($id: ID!) {
    deleteTeam(_id: $id) {
      _id
      nickname
    }
}
`

export const MUTATION_REMOVEPOKEMONFROMTEAM = gql`
mutation Mutation($id: ID!, $pokemonId: ID!) {
    removePokemonfromTeam(_id: $id, pokemonID: $pokemonId) {
      nickname
      pokemon {
        _id
        name
      }
    }
}
`