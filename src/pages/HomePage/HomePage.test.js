import React from "react";
import { shallow } from "enzyme";
import Homepage from "./Homepage";

it("<Homepage /> rendered", () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});
