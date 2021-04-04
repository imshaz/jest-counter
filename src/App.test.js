import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test(`render without any error`, ()=>{
  const wrapper = shallow(<App/>);
  const app=wrapper.find("[data-test='app']");
  expect(app.length).toBe(1)
})
