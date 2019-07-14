/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import BooksList from '../books-list';
import BookDetals from '../book-detals';
import ErrorBoundry from '../error-boundry';
import BooksServices from '../../services/bookstore-service';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';
import Row from '../row';

import './catalog-page.css';

export default class CatalogPage extends Component {
  booksServices = new BooksServices();

  state = {
    books: [],
    loading: true,
    error: false,
    selectedBook: null
  };

  componentDidMount() {
    this.updateInformation();
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  booksLoaded = books => {
    this.setState({ books, loading: false });
  };

  updateInformation = () => {
    this.booksServices
      .getBooks()
      .then(books => this.booksLoaded(books))
      .catch(this.onError);
  };

  onBookSelected = id => {
    this.setState({ selectedBook: id });
  };

  render() {
    const { books, loading, error } = this.state;

    const hasData = !(loading || error);
    const spiner = loading ? <Spiner /> : null;
    const errorIndicator = error ? <ErrorIndicator /> : null;

    const content = hasData ? (
      <BooksList onBookSelected={this.onBookSelected} data={books} />
    ) : null;

    return (
      <ErrorBoundry>
        {spiner}
        {errorIndicator}
        <Row
          left={content}
          right={
            <BookDetals bookId={this.state.selectedBook} booksList={books} />
          }
        />
      </ErrorBoundry>
    );
  }
}
