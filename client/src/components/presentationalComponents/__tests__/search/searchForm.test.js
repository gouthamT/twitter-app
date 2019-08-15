import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../../Search/searchForm';

const myMock = jest.fn();

describe('SearchForm', () => {
  it('renders without crashing', () => {
    const searchForm = shallow(<SearchForm onSearch={myMock} />);
    expect(searchForm.find('.search-box__input')).toHaveLength(1);
    expect(searchForm.find('.search-box__btn-search')).toHaveLength(1);
  });
  
  it('should disable search only if input is valid', () => {
    const searchForm = shallow(<SearchForm onSearch={myMock} />);
    let inputFeild = searchForm.find('.search-box__input'),
      button = searchForm.find('.search-box__btn-search').prop(' ');
    inputFeild.simulate('change', {target: {value: 'My new value'}});
    expect(button).toBeUndefined();
  });

  it('should enable search only if input is valid', () => {
    const searchForm = shallow(<SearchForm onSearch={myMock} />);
    let inputFeild = searchForm.find('.search-box__input'),
      button = searchForm.find('.search-box__btn-search').prop('data-disabled');
    inputFeild.simulate('change', {target: {value: 'My new value'}});
    expect(button).toBeTruthy();
  });
});