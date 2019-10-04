import React, { Fragment, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import SignInPage from "./pages/SignInPage/SignInPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
                    {this.props.currentUser ? (
                      <Redirect to="/" />
                    ) : (
                      <SignInPage />
                    )}
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
              <Route
                exact
                path="/account"
                render={props => (
                  <Fragment>
                    <BreadCrumbs {...props} activelink="activeaccount" />
                    <Account />
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
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
