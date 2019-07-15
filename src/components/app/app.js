/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../header';
import InformationBlok from '../infotmation-blok';
import ErrorBoundry from '../error-boundry';
import CatalogPage from '../catalog-page';
import BooksServices from '../../services/bookstore-service';
import { BookstoreServiceProvider } from '../bookstore-service-context';
import AddGoods from '../add-goods';

import ErrorIndicator from '../error-indicator';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  booksServices = new BooksServices();

  state = {
    hasError: false,
    books: [],
    loading: true,
    changeCatalog: false
  };

  componentDidMount() {
    this.updateInformation();
  }

  booksLoaded = books => {
    this.setState({ books, loading: false });
  };

  pressDelleteButton = () => {
    this.setState({ books: [] });
  };

  pressOnSubmit = data => {
    this.setState({ changeCatalog: true });
  };

  updateInformation = () => {
    this.booksServices
      .getBooks()
      .then(books => this.booksLoaded(books))
      .catch(this.onError);
    this.setState({ loading: true, changeCatalog: false });
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
      loading: this.state.loading
    };

    return (
      <BookstoreServiceProvider value={data}>
        <Router>
          <div className="store-app">
            <Header />
            <InformationBlok />
            <CatalogPage />
            <AddGoods pressOnSubmit={this.pressOnSubmit} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/catalog" component={CatalogPage} />
          </div>
        </Router>
      </BookstoreServiceProvider>
    );
  }
}
