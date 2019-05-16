import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('sidebar component', () => {
  it('renders a sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <a hfref="link">test link</a>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
