/* eslint-disable no-unused-vars */
import React from 'react';

import './books-list.css';

const ItemList = props => {
  const { onBookSelected, data } = props;

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <ul className="books-list list-group">
      {data.map(item => {
        const { id, title } = item;

        return (
          <li
            className="list-group-item"
            key={id}
            onClick={() => onBookSelected(id)}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
