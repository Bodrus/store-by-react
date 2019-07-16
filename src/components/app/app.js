/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../header';
import InformationBlok from '../infotmation-blok';
import ErrorBoundry from '../error-boundry';
import CatalogPage from '../catalog-page';
import BooksServices from '../../services/bookstore-service';
import { BookstoreServiceProvider } from '../bookstore-service-context';
import getJsonData from '../../services/data-json';
import AddGoods from '../add-goods';
import BookDetals from '../book-detals';

import ErrorIndicator from '../error-indicator';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  booksServices = new BooksServices(JSON.parse(getJsonData()));

  state = {
    hasError: false,
    books: [],
    loading: true,
    changeCatalog: false,
    update: false
  };

  componentDidMount() {
    const { books } = this.state;
    if (books.length === 0) {
      this.updateInformation();
    }
  }

  booksLoaded = books => {
    this.setState({ books, loading: false });
  };

  pressDelleteButton = () => {
    this.setState({ books: [] });
  };

  pressOnSubmit = data => {
    const { books } = this.state;
    const newB = [...books, data];
    this.booksServices.setData(data);
    this.updateInformation();
  };

  pressDellBookButton = id => {
    this.booksServices.dellItem(id);
    this.updateInformation();
  };

  updateInformation = () => {
    const { update } = this.state;
    if (!update) {
      this.booksServices
        .getBooks()
        .then(books => this.booksLoaded(books))
        .catch(this.onError);
      this.setState({ loading: true, changeCatalog: false });
    }
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const data = {
      books: this.state.books,
      booksServices: new BooksServices(),
      pressDelleteButton: this.pressDelleteButton,
      loading: this.state.loading,
      pressDellBookButton: this.pressDellBookButton
    };

    return (
      <BookstoreServiceProvider value={data}>
        <Router>
          <div className="store-app">
            <Header />
            <InformationBlok />
            <CatalogPage />
            <AddGoods
              pressOnSubmit={this.pressOnSubmit}
              booksServices={this.booksServices}
            />
            {/* <Route
              path="/"
              render={() => <h2>Welcome to Book Shope</h2>}
              exact
            />
            <Route path="/add" component={AddGoods} />
            <Route path="/catalog" exact component={CatalogPage} /> */}
          </div>
        </Router>
      </BookstoreServiceProvider>
    );
  }
}
