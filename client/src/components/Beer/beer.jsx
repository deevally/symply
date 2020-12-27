import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";



const Beer = ({
  beer: { name, image_url, description, tagline, first_brewed },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image_url} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {tagline}
          </Typography>
        </div>

        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant="body2"
          color="textSecondary"
        />
        <div className={classes.year}>
          <Typography variant="h10">Date Brewed : </Typography>

          <Typography variant="h10">{first_brewed}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}></CardActions>
    </Card>
  );
};

export default Beer;
