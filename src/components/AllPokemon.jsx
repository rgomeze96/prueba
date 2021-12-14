import { Button, Container } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPokemon } from "../actions/getAllPokemonActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const AllPokemon = () => {
  const dispatch = useDispatch();
  const allPokemonState = useSelector(
    (allPokemonState) => allPokemonState.allPokemon
  );
  const [offset, setOffset] = useState(0);
  const retrieveAllPokemon = (offset) => {
    dispatch(getAllPokemon({ offset: offset }));
  };
  useEffect(() => {
    retrieveAllPokemon(offset);
  }, []);
  useEffect(() => {
    retrieveAllPokemon(offset);
  }, [offset]);

  return (
    <div>
      <Container maxWidth="lg">
        {allPokemonState["loading"] === true && <div>Loading...</div>}
        <div>
          <Grid container justifyContent="center" spacing={12}>
            {allPokemonState["dataLoaded"] === true &&
              allPokemonState.data.map(({ name, url }) => (
                <Grid item sx={{ mt: 2 }}>
                  <Card sx={{ minWidth: 275, maxWidth: 400 }}>
                    <CardContent>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Pokemon: {name}
                      </Typography>
                      <Typography variant="body2">
                        Press the button to get info about {name}
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Button
                        href={`/pokemonInfo/${name}`}
                        variant="contained"
                        size="small"
                      >
                        Get More Info
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
        {offset > 18 && (
          <Button onClick={() => setOffset(offset - 19)} variant="contained">
            Previous Pokemon Between {offset - 19} and {offset}
          </Button>
        )}
        <Button
          sx={{ m: 2 }}
          onClick={() => setOffset(offset + 19)}
          variant="contained"
        >
          Next Pokemon Between {offset + 19} and {offset + 38}
        </Button>
      </Container>
    </div>
  );
};
