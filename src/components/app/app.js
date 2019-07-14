/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../header';
import InformationBlok from '../infotmation-blok';
import ErrorBoundry from '../error-boundry';
import CatalogPage from '../catalog-page';

import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends React.Component {
  state = {
    hasError: false,
    selectedPerson: null
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <Header />
        <InformationBlok />
        <CatalogPage />
      </div>
    );
  }
}
