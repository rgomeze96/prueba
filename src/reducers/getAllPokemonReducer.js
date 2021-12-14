const initialState = {
  loading: false,
  dataLoaded: false,
};

const getAllPokemonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "AWAITING_POKEMON":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_POKEMON":
      return {
        ...state,
        loading: false,
      };
    case "SUCCESS_POKEMON":
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
