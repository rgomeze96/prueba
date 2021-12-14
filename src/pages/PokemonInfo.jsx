import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getPokemonInfo } from "../actions/getPokemonInfoActions";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

export const PokemonInfo = ({ name }) => {
  const dispatch = useDispatch();
  const pokemonInfoState = useSelector(
    (pokemonInfoState) => pokemonInfoState.pokemonInfo
  );
  useEffect(() => {
    dispatch(getPokemonInfo({ name }));
  }, []);
  return (
    <div>
      {" "}
      {pokemonInfoState["loading"] === true && <div>Loading...</div>}
      <div>
        <Grid container justifyContent="center" spacing={12}>
          {pokemonInfoState["dataLoaded"] === true && (
            <Card sx={{ maxWidth: 345, m: 25 }}>
              <CardMedia
                component="img"
                height="140"
                image={`${pokemonInfoState.data["sprites"]["front_shiny"]}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pokemon Name: {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pokemon ID: {pokemonInfoState.data["id"]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Height: {pokemonInfoState.data["height"]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Weight: {pokemonInfoState.data["weight"]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Base Experience: {pokemonInfoState.data["base_experience"]}
                </Typography>
              </CardContent>
            </Card>
          )}
          {pokemonInfoState["error"] === true && (
            <h2>Error Finding Pokemon Please Try Again</h2>
          )}
        </Grid>
      </div>
    </div>
  );
};
