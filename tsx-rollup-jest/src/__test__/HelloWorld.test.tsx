import React from "react";
import { shallow } from "enzyme";
import HelloWorld from "../HelloWorld";

describe("component: HelloWorld", () => {
  it("content === 'Hello World!'", () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.contains("Hello World!")).toBe(true);
  });
});
