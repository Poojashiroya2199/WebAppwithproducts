import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";
import Toolbar from "@material-ui/core/Toolbar";

import AppBar from "@material-ui/core/AppBar";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function Appbar(props) {
  const { handleLogout, items } = props;
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Sidebar />
          <div>
            <h3>Appectual Products</h3>
          </div>
          <div className={classes.grow} />
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>

          <IconButton
            component={Link}
            to="/cart"
            onClick={() => <Cart items={items} />}
            aria-label="show 4 new mails"
            color="inherit"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
