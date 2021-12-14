import React from "react";
import { Wrapper } from "./components/Wrapper";
import { Navibar } from "./components/Navibar";
import { NotFound } from "./pages/NotFound";
import { useRoutes } from "hookrouter";
import { Home } from "./pages/Home";
import { AllPokemon } from "./components/AllPokemon";
import { PokemonInfo } from "./pages/PokemonInfo";

const routes = {
  "/": () => <Home />,
  "/allPokemon": () => <AllPokemon />,
  "/pokemonInfo/:name": ({ name }) => <PokemonInfo name={name} />,
};

function App() {
  const match = useRoutes(routes);
  return (
    <div className="App">
      <Wrapper>
        <Navibar />
        {match || <NotFound />}
      </Wrapper>
    </div>
  );
}

export default App;
