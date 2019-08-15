import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../../nav/nav';
import { MemoryRouter } from 'react-router-dom';
import { SearchRoute } from '../../../../constants/routeConstants';

describe('Nav', () => {
  it('renders without crashing', () => {
    const nav = shallow(<Nav />);
    expect(nav.find('.app__nav')).toHaveLength(1);
    expect(nav.find('.app__nav--item')).toHaveLength(3);
  });

  it('should not set active status by default', () => {
    const nav = shallow(<Nav />);
    expect(nav.find('.app__nav--item--active')).toHaveLength(0);
  });

  it('should set active status', () => {
    const nav = mount(<MemoryRouter initialEntries={[SearchRoute]}><Nav /></MemoryRouter>);
    expect(nav.find('.app__nav--item--active').length).toBeGreaterThan(0);
  });
});