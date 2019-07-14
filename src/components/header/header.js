// eslint-disable-next-line no-unused-vars
import React from 'react';
import icon from './logo.png';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          <img className="logo" src={icon} alt="" />
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Catalog</a>
        </li>
        <li>
          <a href="#">Add Books</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
