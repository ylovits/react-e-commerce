import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

it("<NotFound /> rendered", () => {
  expect(shallow(<NotFound />)).toMatchSnapshot();
});
