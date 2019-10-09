import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import Checkout from "./Checkout";

import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

it("<Checkout /> rendered", () => {
  expect(
    shallow(
      <Provider store={store}>
        <Checkout />
      </Provider>
    )
  ).toMatchSnapshot();
});
