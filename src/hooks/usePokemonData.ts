import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_POKEMONS, GET_POKEMON_BY_ID } from "../gql/queries";

function usePokemonData() {
    const allPokemonData = useQuery<{ allPokemon: Pokemon[] }>(GET_POKEMONS);
    const [getPokemonByName, pokemonByNameData] = useLazyQuery<{ pokemon: Pokemon }>(GET_POKEMON_BY_ID);
    
    
    return {
        allPokemonData,
        getPokemonByName,
        pokemonByNameData
    }
}

export default usePokemonData;