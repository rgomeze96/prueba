import axios from "axios";

export const getAllPokemon =
  ({ offset }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "AWAITING_POKEMON",
      });

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
      );
      if (response.status == 200) {
        const data = response.data["results"];
        console.log(data);
        dispatch({
          type: "SUCCESS_POKEMON",
          payload: {
            data,
          },
        });
      }
    } catch (e) {
      console.log("error: ", e);
      dispatch({
        type: "REJECTED_POKEMON",
      });
    }
  };
