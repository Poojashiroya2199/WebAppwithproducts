import React from "react";
import "./styles.css";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Cart from "./components/Cart";

import Dairy from "./components/Dairy";
import Vegetable from "./components/Vegetable";
import Bakery from "./components/Bakery";
import Fruit from "./components/Fruit";
export default function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/home"
          render={(props) => <Home display={true} {...props} />}
        />
        <Route path="/cart" component={Cart} />

        <Route Path="/dairy" component={Dairy} />
        <Route Path="/vegtables" component={Vegetable} />
        <Route Path="/fruits" component={Fruit} />
        <Route Path="/bakery" component={Bakery} />

        <Redirect to="/login" />
      </Switch>
    </>
  );
}
