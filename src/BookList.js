import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BookList = (props) => {
  return (
    <ul>
      { console.log('this is props.book: ', props.books) }
      { props.books.map((book, i) => <li key={i}> <span>Title:</span> { book.title } <br/> <span>Author:</span> { book.author } <br/> <span>Description:</span> { book.description }</li>) }
    </ul>
  )
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
