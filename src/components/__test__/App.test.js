import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../../App.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders a single App element", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("App").exists()).toEqual(true);
  });
});
