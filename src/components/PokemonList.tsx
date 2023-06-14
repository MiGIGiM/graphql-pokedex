import { useState } from "react";
import { InView } from "react-intersection-observer";
import styled from 'styled-components';
import CardLoader from "./Loaders/CardLoader";
import PokemonCard from "./PokemonCard";
import { usePokemonDataContext } from "../context/PokemonDataContext";

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;


function PokemonList() {
    const { allPokemonData } = usePokemonDataContext()

    const { loading, data, fetchMore } = allPokemonData

    const [loadingMore, setLoadingMore] = useState(loading)

    return <GridContainer>
    {
      data?.allPokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} sprite={pokemon.sprite} types={pokemon.types} color={pokemon.color} />
      ))
    }
    {
      loadingMore && (<>
        {
          Array.from(Array(20).keys()).map(() => (
            <CardLoader key={Math.random()} />
          ))
        }
      </>)
    }
    {data && (
        <InView
          onChange={async (inView) => {
            setLoadingMore(true);
            const currentLength = data.allPokemon.length;
            if (inView) {
              await fetchMore({
                variables: {
                  offset: currentLength
                },
              }).finally(() => {
                setLoadingMore(false);
              });
            }
          }}
        />
      )}
  </GridContainer>
}

export default PokemonList;
