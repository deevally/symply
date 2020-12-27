import React from "react";
import {
  AppBar,
  
  Typography,
  Toolbar,
} from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {/* <img
              src={logo}
              alt="Lavida Shopping"
              height="25px"
              className={classes.image}
            /> */}
            Beer
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {/* <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
