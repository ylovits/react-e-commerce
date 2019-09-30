import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row align-items-center min-vh-100 text-center">
        <div className="col">
          <h1>Page Not Found</h1>
          <p>
            Return to the <Link to="/">Home page</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
