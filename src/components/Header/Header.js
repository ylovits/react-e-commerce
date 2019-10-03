import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
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
            <Link to="/">
              <img src="./images/logo.png" alt="" />
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
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">Cart (0)</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
