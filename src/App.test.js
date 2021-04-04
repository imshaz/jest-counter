import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


test(`render without any error`, ()=>{
  const wrapper = shallow(<App/>);
  const app=wrapper.find("[data-test='app']");
  expect(app.length).toBe(1)
})


test('render incremement button', ()=>{
  const wrapper = shallow(<App/>);
  const IncrementBtn=  wrapper.find("[data-test='increment-btn']")
  
  expect(IncrementBtn.length).toBe(1)
})
test('render conter placeholder', ()=>{

  const wrapper = shallow(<App/>);
  const countDisplay= wrapper.find("[data-test='counter-display']");
  expect(countDisplay.length).toBe(1)
})
test('counter start at 0', ()=>{})
test('clicking button increment counter display', ()=>{})
