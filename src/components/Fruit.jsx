import { Box } from "@material-ui/core";
import React from "react";
import ReviewCard from "./Card";
import {IconButton} from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import Home from "./Home";
import data from "./Data";

export default function Fruit() {
  return (
    <>
      <IconButton
        component={Link}
        to="/home"
        onClick={() => <Home />}
        aria-label="show 4 new mails"
        color="inherit"
      >
        <HomeIcon/>
      </IconButton>
    <Box width={"75%"} flex-direction="row">
      {data.map((el) =>
        el.type === "fruit" ? (
          <ReviewCard
            key={el.title}
            name={el.title}
            description={el.description}
            poster={el.filename}
            height={el.height}
            width={el.width}
            price={el.price}
            rating={el.price}
          />
        ) : (
          ""
        )
      )}
    </Box>
    </>
  );
}
