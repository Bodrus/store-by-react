import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/admin" />;
  }
  return (
    <div className="jumbotron">
      <p>Login to see admin page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        login
      </button>
    </div>
  );
};

export default LoginPage;
