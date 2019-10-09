import React from "react";
import { shallow } from "enzyme";
import About from "./About";

it("<About /> rendered", () => {
  expect(shallow(<About />)).toMatchSnapshot();
});
