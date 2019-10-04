import React from "react";
import { Link } from "react-router-dom";

const Minicart = () => {
  return (
    <li className="nav-item">
      <Link to="/cart">
        Cart (<span className="item-count">0</span>)
      </Link>
    </li>
  );
};

export default Minicart;
