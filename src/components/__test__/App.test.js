import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../../App";
import File from "../File";
import Folder from "../Folder";
import FolderToggle from "../FolderToggle";

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

describe("FolderToggle", () => {
  let props;
  beforeEach(() => {
    props = {
      data: [
        {
          type: "pdf",
          name: "Employee Handbook",
          added: "2017-01-06"
        },
        {
          type: "pdf",
          name: "Vehicle Policy",
          added: "2019-01-06"
        }
      ]
    };
  });
  it("renders a collapsed Folder and button", () => {
    const wrapper = mount(<FolderToggle {...props} />);
    expect(wrapper.find("FolderToggle").state().isVisible).toEqual(false);
  });
  it("allows a Folder of Files to be viewed when button clicked", () => {
    const wrapper = mount(<FolderToggle {...props} />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("FolderToggle").state().isVisible).toEqual(true);
    expect(wrapper.find("File").exists()).toEqual(true);
  });
});
