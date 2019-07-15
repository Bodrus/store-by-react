/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import BooksList from '../books-list';
import BookDetals from '../book-detals';
import ErrorBoundry from '../error-boundry';
import BooksServices from '../../services/bookstore-service';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';
import { BookstoreServiceConsumer } from '../bookstore-service-context';
import Row from '../row';

import './catalog-page.css';

export default class CatalogPage extends Component {
  state = {
    selectedBook: null
  };

  onBookSelected = id => {
    this.setState({ selectedBook: id });
  };

  render() {
    return (
      <ErrorBoundry>
        <BookstoreServiceConsumer>
          {({ books, loading }) => {
            if (loading) {
              return <Spiner />;
            }
            return (
              <Row
                left={
                  <BooksList
                    onBookSelected={this.onBookSelected}
                    data={books}
                    loading={loading}
                  />
                }
                right={
                  <BookDetals
                    bookId={this.state.selectedBook}
                    booksList={books}
                  />
                }
              />
            );
          }}
        </BookstoreServiceConsumer>
      </ErrorBoundry>
    );
  }
}
