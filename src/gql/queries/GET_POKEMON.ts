import { gql } from "@apollo/client";

export default gql`
    query AllPokemon($pokemonId: Int!) {
  pokemon(id: $pokemonId) {
    id
    name
    sprite
    types
    abilities
    entry
    stats{
      attack
      hp
      defense
      specialAttack
      specialDefense
      speed
    }
  }
}
`