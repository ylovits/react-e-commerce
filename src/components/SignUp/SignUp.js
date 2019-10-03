import React, { Component } from "react";

export class SignUp extends Component {
  render() {
    return (
      <div className="col-sm-6 signup">
        <div className="card-signup">
          <div className="card-body">
            <h5 className="card-title text-center">
              Want to join Let's Sweat?
            </h5>
            <p className="text-center">Register here</p>
            <form className="form-signin">
              <div className="form-label-group">
                <input
                  type="email"
                  id="upinputEmail"
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                ></input>
                <label htmlFor="upinputEmail">Email address</label>
              </div>

              <div className="form-label-group">
                <input
                  type="password"
                  id="upinputPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                ></input>
                <label htmlFor="upinputPassword">Password</label>
              </div>
              <div className="form-label-group">
                <input
                  type="password"
                  id="upConfirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                ></input>
                <label htmlFor="upConfirmPassword">Confirm Password</label>
              </div>
              <input
                value="Sign Up"
                className="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
