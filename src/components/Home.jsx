import React, { useState } from "react";
import data from "./Data";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import ReviewCard from "./Card";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Appbar from "./Appbar";
import List from "@material-ui/core/List";
import authService from "../service/authService";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function Home(props) {
  const classes = useStyles();
  const [likelist, setlikelist] = useState([]);
  const [cartlist, setcart] = useState([]);
  const cart = [];
  const handleLogout = () => {
    authService.handleLogout(props);
  };
  //console.log(data);

  const handlelike = (name) => {
    console.log("liked");
    const likesCopy = data.map((item) => {
      if (item.title === name) {
        item.liked = !item.liked;
        return item;
      }
      return null;
    });
    likelist.push(likesCopy);
    setlikelist(likesCopy);
  };

  const handlecart = (name) => {
    const cartlistcopy = data.filter((el) => {
      if (el.title === name && !el.addcart) {
        el.addcart = true;
        console.log("added");
        cart.push(el);
        return el;
      } else if (el.title === name && el.addcart) {
        el.addcart = false;
        console.log("removed");
      }
      return null;
    });
    console.log(data);
    cartlist.push(cartlistcopy);
    setcart(cartlistcopy);
    console.log(cartlist);
  };
  console.log(data);
  return (
    <>
      <Appbar handleLogout={handleLogout} items={cartlist} />
      <Box display="flex" flex-direction="row">
        <Box width={"30%"}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Items
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button component={Link} to="/dairy">
              <ListItemText primary="Dairy products" />
            </ListItem>
            <ListItem button component={Link} to="/vegetables">
              <ListItemText primary="Vegetables" />
            </ListItem>
            <ListItem button component={Link} to="/fruits">
              <ListItemText primary="Fruits" />
            </ListItem>
            <ListItem button component={Link} to="/bakery">
              <ListItemText primary="Bakery" />
            </ListItem>
          </List>
        </Box>
        <Box margin="20px" width={"65%"}>
          {data.map((el) => (
            <Box margin="15px">
              <ReviewCard
                key={el.title}
                name={el.title}
                description={el.description}
                type={el.type}
                poster={el.filename}
                height={el.height}
                width={el.width}
                price={el.price}
                rating={parseFloat(el.rating)}
                onlike={handlelike}
                oncart={handlecart}
                like={el.liked}
                addcart={el.addcart}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
