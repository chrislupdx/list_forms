import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a color', () => {
    const rgb = {
      red: 111,
      green: 3,
      blue: 0
    };

    const wrapper = shallow(<Color name="Red" rgb={rgb} />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
