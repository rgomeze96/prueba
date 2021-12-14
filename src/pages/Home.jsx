import React, { useState } from "react";
import { Page } from "../components/Page";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { AllPokemon } from "../components/AllPokemon";

export const Home = () => {
  const state = useSelector((state) => state.allPokemon);
  const pokemonToLookUp = useState("");

  function lookUpPokemon() {}

  return (
    <div>
      <h1>Welcome to your Pokemon Resource!</h1>
      <hr className="border-dark" />
      {state["dataLoaded"] === false && (
        <Grid container justifyContent="center" spacing={12}>
          <Grid item>
            <Card sx={{ minWidth: 275, maxWidth: 400 }}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Get All Pokemon
                </Typography>
                <Typography variant="body2">
                  Pressing this button will retrieve the first 20 Pokemon
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button href="/allPokemon" variant="contained" size="small">
                  Retrieve All Pokemon
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
