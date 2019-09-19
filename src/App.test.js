import React from 'react';
import 'jest-enzyme';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme'
import { SideMenu } from './components/SideMenu';

describe('Testing the APP component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('Testing Side Menu component <SideMenu />' , () => {
  
  it('should render three <SideMenu /> components', () =>{
    const wrapper = shallow(<SideMenu />);
    expect(wrapper.find(SideMenu).to.have.lenght(3))
  } )

})