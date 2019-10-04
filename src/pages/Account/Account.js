import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Account = ({ currentUser }) => {
  return (
    <Fragment>
      <div className="bg-dark text-light mb-4 p-2">
        Welcome <strong>{currentUser && currentUser.displayName}</strong>
      </div>
      <div className="row justify-content-center">
        <div className="bg-light account mb-4 p-2">
          <h3 className="mb-3">Manage your account</h3>

          {currentUser ? (
            <button
              className="btn btn-lg btn-primary btn-block text-uppercase mb-2"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button>
          ) : (
            <Link
              className="btn btn-lg btn-primary btn-block text-uppercase mb-2"
              to="/signin"
            >
              Sign In
            </Link>
          )}
          {currentUser && (
            <button className="btn btn-lg btn-secondary btn-block text-uppercase mb-2">
              Delete Account
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(Account);
