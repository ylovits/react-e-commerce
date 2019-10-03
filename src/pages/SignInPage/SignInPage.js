import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./SignInPage.scss";

const SignInPage = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default SignInPage;
