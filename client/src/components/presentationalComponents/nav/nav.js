/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeRoute, SearchRoute } from '../../../constants/routeConstants';
import modalService from '../../../helpers/modalService';
import AddTweet from '../user/addTweet';

function Nav() {
  const onClick = (event) => {
    event && event.preventDefault();
    modalService.show(AddTweet);
  };
  return <nav className="app__nav">
    <NavLink to={HomeRoute} exact className='app__nav--item' activeClassName='app__nav--item--active'>Home</NavLink>
    <NavLink to={SearchRoute} exact className='app__nav--item app__nav--item--search' activeClassName='app__nav--item--active'>Search</NavLink>
    <a className='app__nav--item nav__item--modal' onClick={onClick} href='#'>Tweet</a>
  </nav>;
}

export default Nav;