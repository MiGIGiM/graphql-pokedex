import { gql } from "@apollo/client";

export default gql`
    query AllPokemon($offset: Int) {
    allPokemon(offset: $offset) {
        id
        name
        sprite
        types
        color
    }
}
`