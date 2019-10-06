import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <div
        className="row align-items-center text-center"
        style={{ minHeight: "inherit" }}
      >
        <div className="col">
          <img
            src={spinner}
            alt="Loading..."
            style={{
              width: "25%",
              margin: "auto",
              display: "block"
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
