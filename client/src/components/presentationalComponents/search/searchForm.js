import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {
  
  const [value, setValue] = useState(props.value);
  
  const { onSearch, placeHolder, label } = props;
  
  const onsubmit = (event) => {
    event && event.preventDefault();
    IsSearchValid() && onSearch && onSearch(value);
  };
  
  const IsSearchValid = () => {
    return value && value.match(/^(?!\s*$).+/igm);
  };
  
  return (<form className="form__search" onSubmit={onsubmit} autoComplete='off'>
    <input id="input__search" placeholder={placeHolder} autoComplete='off' type='text' className="input search-box__input" value={value} onChange={e => setValue(e.target.value)}></input>
    <button id='btn__search' className='btn search-box__btn-search' data-disabled={!IsSearchValid()}>{label}</button>
  </form>);
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string
};

SearchForm.defaultProps = {
  onSearch: null,
  placeHolder: 'search twitter',
  label: 'Search'
};

export default SearchForm;