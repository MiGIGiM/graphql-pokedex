import { PropsWithChildren, createContext, useContext, useMemo } from "react";
import { useQuery, useLazyQuery, OperationVariables, QueryResult, LazyQueryExecFunction} from "@apollo/client";
import { GET_POKEMONS, GET_POKEMON_BY_ID } from "../gql/queries";

interface PokemonDataValue {
    allPokemonData: QueryResult<{
    allPokemon: Pokemon[];
}, OperationVariables>;
    getPokemonById:  LazyQueryExecFunction<{
    pokemon: Pokemon;
}, OperationVariables>;
    pokemonByIdData:  QueryResult<{
    pokemon: Pokemon;
}, OperationVariables>;
}

const PokemonDataContext = createContext<PokemonDataValue>({} as PokemonDataValue);

export function PokemonDataProvider({ children }: PropsWithChildren) {
    const allPokemonData = useQuery<{ allPokemon: Pokemon[] }>(GET_POKEMONS);
    const [getPokemonById, pokemonByIdData] = useLazyQuery<{ pokemon: Pokemon }>(GET_POKEMON_BY_ID);

    const value = useMemo(() => ({
        allPokemonData,
        getPokemonById,
        pokemonByIdData
    }), [allPokemonData, getPokemonById, pokemonByIdData])

    return (
        <PokemonDataContext.Provider value={value}>
            {children}
        </PokemonDataContext.Provider>
    )
}

export function usePokemonDataContext() {
    return useContext(PokemonDataContext);
}
