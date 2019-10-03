import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Category from "./pages/Category/Category";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import About from "./pages/About/About";
import SignInPage from "./pages/SignInPage/SignInPage";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className="container pt-1 pl-3 pr-3 pb-1 bg-light main-wrapper">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <BreadCrumbs {...props} activelink="activehome" />
                  <HomePage />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/signin"
              render={props => (
                <Fragment>
                  <BreadCrumbs {...props} activelink="activesignin" />
                  <SignInPage />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/about"
              render={props => (
                <Fragment>
                  <BreadCrumbs {...props} activelink="activeabout" />
                  <About />
                </Fragment>
              )}
            />
            <Route exact path="/404" component={NotFound} />
            <Route
              exact
              path="/:categoryId"
              render={props => (
                <Fragment>
                  <BreadCrumbs {...props} activelink="activecategory" />
                  <Category />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/:categoryId/:productMPN"
              render={props => (
                <Fragment>
                  <BreadCrumbs {...props} activelink="activeproduct" />
                  <Product />
                </Fragment>
              )}
            />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
