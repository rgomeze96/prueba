const initialState = {
  loading: false,
  dataLoaded: false,
  error: false,
};

const getAllPokemonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "AWAITING_POKEMON_INFO":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_POKEMON_INFO":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "SUCCESS_POKEMON_INFO":
      return {
        ...state,
        loading: false,
        dataLoaded: true,
        data: payload.data,
      };
    default:
      return state;
  }
};

export default getAllPokemonReducer;
