import React, { Component } from 'react';
import Spiner from '../spiner';
import DelleteButton from '../delete-button';

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

    if (!book) {
      return <span>Select a book from a list</span>;
    }

    const { coverImage, title, author, price } = book;

    const data = (
      <div className="book-details card">
        <img className="book-image" src={coverImage} />

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
          <DelleteButton />
        </div>
      </div>
    );

    const noData = loading ? <Spiner /> : null;
    const renderData = !loading ? data : null;

    return (
      <>
        {noData}
        {renderData}
      </>
    );
  }
}
