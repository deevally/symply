import React from "react";
import { Grid } from "@material-ui/core";
import Beer from "../Beer/beer"
import useStyles from "./styles";




const Allbeer = ({ data }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {data.beers.map((beer) => (
          <Grid item key={beer.id} xs={12} sm={6} md={4} lg={3}>
            <Beer beer={beer} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Allbeer;
