import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup =(props={}, state=null)=>{
  return shallow(<App {...props}/>);
}

const findByDataTest=(wrapper, datatest)=>{
  return wrapper.find(`[data-test='${datatest}']`)
}
test(`render without any error`, ()=>{
  const wrapper = setup();
  const app= findByDataTest(wrapper, 'app');
  expect(app.length).toBe(1)
})


test('render incremement button', ()=>{
  const wrapper = setup();
  const IncrementBtn = findByDataTest(wrapper, 'increment-btn');  
  expect(IncrementBtn.length).toBe(1)
})
test('render conter placeholder', ()=>{

  const wrapper = setup();
  const countDisplay=  findByDataTest(wrapper, 'counter-display');
  expect(countDisplay.length).toBe(1)
})
test('counter start at 0', ()=>{})
test('clicking button increment counter display', ()=>{})
