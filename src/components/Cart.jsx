import React from "react";
import CardCart from "./CardCart";
import data from "./Data";
import { Button } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Home from "./Home";
export default function Cart(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handlecheckout = () => {
    setOpen(true);
  };
  const total = () => {
    let sum = data.map((el) => {
      if (el.addcart) {
        return el.price;
      }
      return 0;
    });
    let ans = 0;
    for (let i = 0; i < sum.length; i++) {
      ans += sum[i];
    }
    return ans;
  };
  return (
    <>
      <div>Total Price:{total()}/-</div>
      {data.map((el) =>
        el.addcart ? (
          <>
            <CardCart
              key={el.title}
              title={el.title}
              description={el.description}
              price={el.price}
              value={el.value}
            />
          </>
        ) : null
      )}
      <Button variant="contained" color="primary" onClick={handlecheckout}>
        Chekout
      </Button>
      <IconButton
        component={Link}
        to="/home"
        onClick={() => <Home />}
        aria-label="show 4 new mails"
        color="inherit"
      >
        <HomeIcon />
      </IconButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          correctly chechout
        </Alert>
      </Snackbar>
    </>
  );
}
