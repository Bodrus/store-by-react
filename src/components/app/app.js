import React from 'react';
import InformationBlok from '../infotmation-blok';
import ErrorBoundry from '../error-boundry';
import CatalogPage from '../catalog-page';
import BooksServices from '../../services/bookstore-service';
import { BookstoreServiceProvider } from '../bookstore-service-context';
import getJsonData from '../../services/data-json';
import AdminPage from '../admin-page';
import LoginPage from '../login-page';
import HeaderMaterial from '../headerMaterial/headerMaterial';

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
    update: false,
    isLoggedIn: false
  };

  componentDidMount() {
    const { books } = this.state;
    if (books.length === 0) {
      this.updateInformation();
    }
  }

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  booksLoaded = books => {
    this.setState({ books, loading: false });
  };

  pressDelleteButton = () => {
    this.setState({ books: [] });
  };

  pressOnSubmit = data => {
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
    const { hasError, isLoggedIn } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }

    const data = {
      books: this.state.books,
      booksServices: this.booksServices,
      pressDelleteButton: this.pressDelleteButton,
      loading: this.state.loading,
      pressDellBookButton: this.pressDellBookButton,
      pressOnSubmit: this.pressOnSubmit,
      isLoggedIn: isLoggedIn
    };

    return (
      <BookstoreServiceProvider value={data}>
        <Router>
          <ErrorBoundry>
            <div className="store-app">
              <HeaderMaterial />
              <InformationBlok />
              <Route
                path="/"
                render={() => <h2>Welcome to Book Shope</h2>}
                exact
              />
              <Route path="/admin/" component={AdminPage} />
              <Route path="/catalog/" exact component={CatalogPage} />
              <Route
                path="/login/"
                render={() => (
                  <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                )}
              />
            </div>
          </ErrorBoundry>
        </Router>
      </BookstoreServiceProvider>
    );
  }
}
