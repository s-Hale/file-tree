import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../../App";
import File from "../File";
import Folder from "../Folder";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders a single App element", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("App").exists()).toEqual(true);
  });
  it("renders File components to denote single files", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("File").exists()).toEqual(true);
  });
  it("renders Folder components to denote folders", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("Folder").exists()).toEqual(true);
  });
});
