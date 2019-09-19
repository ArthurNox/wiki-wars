import React from 'react'
import 'jest-enzyme';
import { shallow } from 'enzyme'
import { SideMenu } from './components/SideMenu'



describe('Testing Side Menu component <SideMenu />' , () => {
  
  it('should render three <SideMenu /> components', () =>{
    const wrapper = shallow(<SideMenu />);
    expect(wrapper.find(SideMenu).to.have.lenght(3))
  } )

})