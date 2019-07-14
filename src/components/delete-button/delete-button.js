/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import './delete-button.css';

const DeleteButton = ({ pressDelleteButton }) => {
  return (
    <button
      className="btn btn-danger btn-lg delete-button"
      onClick={() => pressDelleteButton()}
    >
      Clear Catalog
    </button>
  );
};

export default DeleteButton;
