import React from "react";
import { shallow } from "enzyme";
import SignInPage from "./SignInPage";

it("<SignInPage /> rendered", () => {
  expect(shallow(<SignInPage />)).toMatchSnapshot();
});
