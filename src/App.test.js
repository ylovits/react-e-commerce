import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import App from "./App";

import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

it("<App /> rendered", () => {
  expect(
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  ).toMatchSnapshot();
});
