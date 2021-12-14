import axios from "axios";

export const getPokemonInfo =
  ({ name }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "AWAITING_POKEMON_INFO",
      });

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}/`
      );
      if (response.status == 200) {
        const data = response.data;
        console.log(data);
        dispatch({
          type: "SUCCESS_POKEMON_INFO",
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: "REJECTED_POKEMON_INFO",
        });
      }
    } catch (e) {
      console.log("error: ", e);
      dispatch({
        type: "REJECTED_POKEMON_INFO",
      });
    }
  };
