import styled from "styled-components";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";

const StyledApp = styled.main`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 3rem));
  grid-gap: 2rem;

  section:last-child {
    position: sticky;
    top: 1.5rem;
    height: 100vh;
  }
`;


function App() {

  return (
    <StyledApp>
      <PokemonList />
      <section>
        <PokemonDetails />
      </section>
    </StyledApp>
  )
}

export default App;
