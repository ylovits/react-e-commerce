import React from "react";
import { shallow } from "enzyme";
import Category from "./Category";

it("<Category /> rendered", () => {
  expect(shallow(<Category />)).toMatchSnapshot();
});
