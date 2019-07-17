/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Spiner from '../spiner';
import icon from './notImage.png';

import './book-detals.css';

export default class BookDetails extends Component {
  componentDidMount() {
    const { bookId, booksList } = this.props;
    this.updateitem(bookId, booksList);
  }

  componentDidUpdate(prefProps) {
    const { bookId, booksList } = this.props;
    if (prefProps.bookId !== bookId) {
      this.setState({ loading: true });
      this.updateitem(bookId, booksList);
    }
  }

  state = {
    book: null,
    loading: true
  };

  getBook = (bookId, booksList) => {
    const book = booksList.filter(book => book.id === bookId);
    return book[0];
  };

  updateitem = (bookId, booksList) => {
    if (!bookId) {
      return;
    }
    const book = this.getBook(bookId, booksList);
    this.setState({ book, loading: false });
  };

  render() {
    const { book, loading } = this.state;
    const { pressDellBookButton, bookId, isLoggedIn } = this.props;
    const span = <span>Select a book from a list</span>;

    if (!book) {
      return span;
    }

    const { coverImage, title, author, price } = book;

    const img = !coverImage ? icon : coverImage;

    const button = (
      <button
        type="submit"
        className="btn btn-danger"
        onClick={() => pressDellBookButton(bookId)}
      >
        Dell book
      </button>
    );
    const buttonDellete = isLoggedIn ? button : null;

    const data = (
      <div className="book-details card">
        <img className="book-image" src={img} alt="books" />

        <div className="card-body">
          <h4>{title}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Autor:</span>
              <span>{author}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Price:</span>
              <span>{price}</span>
            </li>
          </ul>
          {buttonDellete}
        </div>
      </div>
    );

    const noData = loading ? <Spiner /> : null;
    const renderData = this.props.booksList.length !== 0 ? data : null;

    return (
      <>
        {noData}
        {renderData}
      </>
    );
  }
}
