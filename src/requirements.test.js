import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";

import App from "./editable/App";
import Search from "./editable/Search";
import StatusSelect from "./editable/StatusSelect";

import api from "./api";

Enzyme.configure({ adapter: new Adapter() });

describe("Test render todos", () => {
  beforeEach(() => {
    sinon.spy(api, "getTodos");
  });

  afterEach(() => {
    api.getTodos.restore();
  });

  it("should call api.getTodos after rendering App", () => {
    mount(<App />);
    expect(api.getTodos.calledOnce).toBe(true);
  });
});

describe("Test search todos", () => {
  let root;
  beforeAll(() => {
    root = mount(<App />);
  });

  beforeEach(() => {
    sinon.spy(api, "getTodos");
  });

  afterEach(() => {
    api.getTodos.restore();
  });

  it("should call api.getTodos after submitting search form", () => {
    root.find(Search).invoke("onSubmit")("xxx");
    expect(api.getTodos.calledOnce).toBe(true);
  });

  it("shouldn't call api.getTodos if keyword has been searched", () => {
    root.find(Search).invoke("onSubmit")("xxx");
    expect(api.getTodos.notCalled).toBe(true);
  });
});

describe("Test filter todos", () => {
  let root;
  beforeAll(() => {
    root = mount(<App />);
  });

  beforeEach(() => {
    sinon.spy(api, "getTodos");
  });

  afterEach(() => {
    api.getTodos.restore();
  });

  it("should call api.getTodos after changing status", () => {
    root.find(StatusSelect).invoke("onChange")("pending");
    expect(api.getTodos.calledOnce).toBe(true);
  });

  it("shouldn't call api.getTodos if status has been selected before", () => {
    root.find(StatusSelect).invoke("onChange")("pending");
    expect(api.getTodos.notCalled).toBe(true);
  });
});

describe("Test filter todos", () => {
  let root;
  beforeAll(() => {
    root = mount(<App />);
  });

  beforeEach(() => {
    sinon.spy(api, "getTodos");
  });

  afterEach(() => {
    api.getTodos.restore();
  });

  it("should call api.getTodos after changing status", () => {
    root.find(StatusSelect).invoke("onChange")("pending");
    expect(api.getTodos.calledOnce).toBe(true);
  });

  it("shouldn't call api.getTodos if status has been selected before", () => {
    root.find(StatusSelect).invoke("onChange")("pending");
    expect(api.getTodos.notCalled).toBe(true);
  });
});
