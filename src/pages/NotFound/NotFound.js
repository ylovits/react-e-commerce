import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column h-100 flex-grow-1">
      <div className="row flex-grow-1 align-items-center text-center">
        <div className="col">
          <h1>Page Not Found</h1>
          <span>
            Return to the <Link to="/">Home page</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
