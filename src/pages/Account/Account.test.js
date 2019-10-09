import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import Account from "./Account";

import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

it("<Account /> rendered", () => {
  expect(
    shallow(
      <Provider store={store}>
        <Account />
      </Provider>
    )
  ).toMatchSnapshot();
});
