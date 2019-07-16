/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';
import icon from './book.png';
import DeleteButton from '../delete-button';
import BooksServices from '../../services/bookstore-service';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

import './information-blok.css';

const InformationBlok = () => {
  const content = (
    <BookstoreServiceConsumer>
      {({ books, booksServices, pressDelleteButton, loading }) => {
        return (
          <InformationView
            books={books}
            booksServices={booksServices}
            pressDelleteButton={pressDelleteButton}
            loading={loading}
          />
        );
      }}
    </BookstoreServiceConsumer>
  );

  return (
    <div className="information-blok jumbotron rounded">
      <img className="book-image" src={icon} alt="" />
      {content}
    </div>
  );
};

const InformationView = ({
  books,
  booksServices,
  pressDelleteButton,
  loading
}) => {
  const { totalNumber, sumOfPrices, averagePrice } = booksServices.getData(
    books
  );

  if (loading) {
    return <Spiner />;
  }
  return (
    <div>
      <h4>Catalog Information</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Total number of goods</span>
          <span>{totalNumber}</span>
        </li>
        <li className="list-group-item">
          <span className="term">The sum of the prices of all goods</span>
          <span>{sumOfPrices}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Average price</span>
          <span>{averagePrice}</span>
        </li>
      </ul>
      <DeleteButton pressDelleteButton={pressDelleteButton} />
    </div>
  );
};

export default InformationBlok;
