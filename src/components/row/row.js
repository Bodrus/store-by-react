/* eslint-disable no-unused-vars */
import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2 people-page">
      <div className="col-md-6 list-block">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default Row;
