import styled from "styled-components";
import { capitalize } from "../shared/helpers/strings";
import { getPokemonTypeColor, colorNameToHex } from "../shared/helpers/colors";
import { usePokemonDataContext } from "../context/PokemonDataContext";

type Props = Partial<Pokemon>

const StyledPokemonCard = styled.button`
    box-sizing: border-box;
    display: inline-block;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin: 0.15rem;
    overflow: hidden;
    `;

const StyledPokemonFigure = styled.figure`
    margin: 0;
    padding: 0;
    text-align: center;
    `;

const StyledPokemonImage = styled.img<{ color: string }>`
    width: 150px;
    aspect-ratio: 1;
    border-radius: 50%;
    filter: drop-shadow(0 0 0.5rem ${props => props.color});
`;

const StyledPokemonCaption = styled.figcaption`
    font-weight: bold;
    font-size: 1.25rem;
    text-align: center;
`
const StyledPokemonType = styled.span<{ color: string }>`
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    background-color: ${props => props.color};
    color: white;
`


function PokemonCard({ id, name, sprite, types, color}: Props) {

    const { getPokemonById } = usePokemonDataContext()
    
  return <StyledPokemonCard type='button' onClick={() => getPokemonById({
    variables: {
        pokemonId: id,
    }
  })}>
    <StyledPokemonFigure>
        <StyledPokemonImage src={sprite} alt={name} color={colorNameToHex(color || '')} />
        <StyledPokemonCaption>{capitalize(name || '')}</StyledPokemonCaption>
        <div>
            {
                types?.map((type) => (
                    <StyledPokemonType key={type} color={getPokemonTypeColor(type)}>
                        {capitalize(type)}
                    </StyledPokemonType>
                ))
            }
        </div>
    </StyledPokemonFigure>
  </StyledPokemonCard>
}

export default PokemonCard;
