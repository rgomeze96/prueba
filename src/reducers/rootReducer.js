import { combineReducers } from "redux";
import getPokemonInfoReducer from "./getPokemonInfoReducer";
import getAllPokemonReducer from "./getAllPokemonReducer";

const rootReducer = combineReducers({
  allPokemon: getAllPokemonReducer,
  pokemonInfo: getPokemonInfoReducer,
});

export default rootReducer;
