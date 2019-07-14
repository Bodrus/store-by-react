/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';
import icon from './book.png';
import DeleteButton from '../delete-button';
import BooksServices from '../../services/bookstore-service';

import './information-blok.css';

export default class InformationBlok extends Component {
  booksServices = new BooksServices()

  state = {
    books: [],
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updateInformation();
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  }

  pressDelleteButton = () => {
    this.setState({ books: [] });
  }

  booksLoaded = books => {
    this.setState({ books, loading: false });
  }

  updateInformation = () => {
    this.booksServices
      .getBooks()
      .then(books => this.booksLoaded(books))
      .catch(this.onError);
  }

  render() {
    const { books, loading, error } = this.state;

    const {
      totalNumber,
      sumOfPrices,
      averagePrice,
    } = this.booksServices.getData(books);

    const hasData = !(loading || error);
    const spiner = loading ? <Spiner /> : null;

    const content = hasData ? (
      <InformationView
        totalNumber={totalNumber}
        sumOfPrices={sumOfPrices}
        averagePrice={averagePrice}
        pressDelleteButton={this.pressDelleteButton}
      />
    ) : null;

    const errorIndicator = error ? <ErrorIndicator /> : null;

    return (
      <div className="information-blok jumbotron rounded">
        <img className="book-image" src={icon} alt="" />
        {spiner}
        {content}
        {errorIndicator}
      </div>
    );
  }
}

const InformationView = ({
  totalNumber,
  averagePrice,
  sumOfPrices,
  pressDelleteButton,
}) => {
  return (
    <div>
      <h4>Catalog Information</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Общее количество книг</span>
          <span>{totalNumber}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Сумма цен всех товаров</span>
          <span>{sumOfPrices}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Средняя цена</span>
          <span>{averagePrice}</span>
        </li>
      </ul>
      <DeleteButton pressDelleteButton={pressDelleteButton} />
    </div>
  );
};
