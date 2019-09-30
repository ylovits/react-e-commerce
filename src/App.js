import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Category from "./pages/Category/Category";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/category/:categoryId" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;
