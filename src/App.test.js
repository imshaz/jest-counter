import { render, screen } from "@testing-library/react";
import App from "./App";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

const findByDataTest = (wrapper, datatest) => {
  return wrapper.find(`[data-test='${datatest}']`);
};
test(`render without any error`, () => {
  const wrapper = setup();
  const app = findByDataTest(wrapper, "app");
  expect(app.length).toBe(1);
});

test("render incremement button", () => {
  const wrapper = setup();
  const IncrementBtn = findByDataTest(wrapper, "increment-btn");
  expect(IncrementBtn.length).toBe(1);
});
test("render conter placeholder", () => {
  const wrapper = setup();
  const countDisplay = findByDataTest(wrapper, "counter-display");
  expect(countDisplay.length).toBe(1);
});

test("counter start at 0", () => {
  const wrapper = setup();
  const { counter } = wrapper.state();
  expect(counter).toBe(0);
});

test("clicking button increment counter display", () => {
  const wrapper = setup();
  const { counter } = wrapper.state();
  const incrementBtn = findByDataTest(wrapper, "increment-btn");
  incrementBtn.simulate("click");
  incrementBtn.simulate("click");
  incrementBtn.simulate("click");
  expect(wrapper.state().counter).toBe(counter + 3);
});

test("Decrement button render correctly", () => {
  const wrapper = setup();
  const decrementBtn = findByDataTest(wrapper, "decrement-btn");
  expect(decrementBtn.length).toBe(1);
});

test("decrement button click decrement counter by 1", () => {
  const wrapper = setup();
  // const incrementBtn = findByDataTest(wrapper, "increment-btn");
  // incrementBtn.simulate("click");
  const decrementBtn = findByDataTest(wrapper, "decrement-btn");
  // if (counter === 0) throw Error("counter cannot be less than zero");
  decrementBtn.simulate("click");
  const {
    counter,
    error: { countLessThanZero },
  } = wrapper.state();
  if (counter === 0) {
    expect(countLessThanZero.length).toBeGreaterThan(2);
  }
  expect(counter).toBe(0);
});
