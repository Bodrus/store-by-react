/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import icon from './logo.png';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          <img className="logo" src={icon} alt="" />
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/admin">Add Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
