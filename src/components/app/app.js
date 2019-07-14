/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../header';

import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends React.Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return <Header />;
  }
}
