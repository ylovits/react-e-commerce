import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="col-sm-6 signup">
        <div className="card-signup">
          <div className="card-body">
            <h5 className="card-title text-center">
              Want to join Let's Sweat?
            </h5>
            <p className="text-center">Register here</p>
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <div className="form-label-group">
                <input
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                  id="upinputUsername"
                  className="form-control"
                  placeholder="Username"
                  required
                  autoFocus
                ></input>
                <label htmlFor="upinputUsername">Username</label>
              </div>
              <div className="form-label-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  id="upinputEmail"
                  className="form-control"
                  placeholder="Email address"
                  required
                ></input>
                <label htmlFor="upinputEmail">Email address</label>
              </div>

              <div className="form-label-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
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
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  id="upConfirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                ></input>
                <label htmlFor="upConfirmPassword">Confirm Password</label>
              </div>
              <input
                defaultValue="Sign Up"
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
