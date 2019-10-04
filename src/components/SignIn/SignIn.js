import React, { Component } from "react";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="col-sm-6 signin border-right">
        <div className="card-signin">
          <div className="card-body">
            <h5 className="card-title text-center">Already have an account?</h5>
            <p className="text-center">Sign In</p>
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <div className="form-label-group">
                <input
                  name="email"
                  value={this.state.email}
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  onChange={this.handleChange}
                  required
                  autoFocus
                ></input>
                <label htmlFor="inputEmail">Email address</label>
              </div>

              <div className="form-label-group">
                <input
                  name="password"
                  value={this.state.password}
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handleChange}
                  required
                ></input>
                <label htmlFor="inputPassword">Password</label>
              </div>

              <input
                defaultValue="Submit Form"
                className="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              />

              <hr className="my-4" />
              <button
                className="btn btn-lg btn-google btn-block text-uppercase"
                onClick={signInWithGoogle}
              >
                <i className="fab fa-google mr-2"></i> Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
