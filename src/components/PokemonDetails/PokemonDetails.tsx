import { usePokemonDataContext } from "../../context/PokemonDataContext";
import { capitalize } from "../../shared/helpers/strings";
import { getPokemonTypeColor } from '../../shared/helpers/colors'
import { Caption, Container, Figure, Habilities, Image, Type, Wrapper } from './PokemonDetails.styled'
import Stats from "./Stats/Stats";
import { Pokeball } from "../Loaders/Pokeball";


function PokemonDetails() {
    const { pokemonByIdData } = usePokemonDataContext()

    const { loading, error, data } = pokemonByIdData


    if (loading) return <Wrapper>
        <Pokeball />
        <h6>Loading...</h6>
    </Wrapper>

    if (error) return <p>Error</p>;

    if (data)
    return (
        <Container>
            <Figure>
                <Image src={data?.pokemon.sprite} alt={data?.pokemon.name} />
                <Caption>
                    <h1>{capitalize(data?.pokemon.name || '')}</h1>
                    {
                        data?.pokemon.types.map((type) => (
                            <Type key={type} color={getPokemonTypeColor(type)}>{capitalize(type)}</Type>
                        ))
                    }
                    </Caption>
            </Figure>
            <p>{data?.pokemon.entry}</p>
            <Habilities>
                {
                    data?.pokemon.abilities.map((ability) => (
                        <p key={ability}>{capitalize(ability)}</p>
                    ))
                }
            </Habilities>

            <Stats stats={data?.pokemon.stats} />

        </Container>
    )

    return <Wrapper>
        <h6>
            Select a pokemon to see details
        </h6>
    </Wrapper>
}

export default PokemonDetails;
