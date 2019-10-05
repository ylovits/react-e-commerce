import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../fakeapi/logo.svg";
import Minicart from "../Minicart/Minicart";
import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  const [menuClassName, setClassName] = useState("");

  const handleClick = () => {
    if (menuClassName === "") {
      setClassName("active");
    } else if (menuClassName === "active") {
      setClassName("");
    }
  };

  return (
    <nav className="flex-nav header container pl-4 pr-4 bg-light mt-4">
      <div className="grid row menu">
        <div className="col-8 col-md-5 pt-3">
          <p className="logo">
            <Link className="logo-wrap" to="/">
              <Logo className="logo" />
            </Link>
          </p>
        </div>
        <div className="col-4 col-md-7 pt-1">
          <span onClick={handleClick} className="toggle-nav mt-2 mb-2">
            <div className={`burger is${menuClassName}`}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </span>
          <ul className={`bg-light ${menuClassName}`}>
            <li className="nav-item">
              {currentUser ? (
                <div className="cursor-pointer" onClick={() => auth.signOut()}>
                  Sign Out
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </li>
            {currentUser && (
              <li className="nav-item">
                <Link to="/account">My Account</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <Minicart />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
