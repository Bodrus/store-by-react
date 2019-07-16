/* eslint-disable no-unused-vars */
import React from 'react';
import AddGoods from '../add-goods';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

export default class AdminPage extends React.Component {
  render() {
    return (
      <BookstoreServiceConsumer>
        {({ pressOnSubmit, booksServices }) => {
          return (
            <AddGoods
              pressOnSubmit={pressOnSubmit}
              booksServices={booksServices}
            />
          );
        }}
      </BookstoreServiceConsumer>
    );
  }
}
