/* eslint-disable no-unused-vars */
import React from 'react';
import Spiner from '../spiner';

import './books-list.css';

const ItemList = props => {
  const { onBookSelected, data, loading } = props;

  if (!data || data.length === 0) {
    return null;
  }

  if (loading) {
    return <Spiner />;
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
