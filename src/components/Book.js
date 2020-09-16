/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <div className="Book-Panel">
      <div className="book-information">
        <div className="book-category">
          {category}
        </div>
        <div className="book-title">
          {title}
        </div>
        <div className="book-author">
          Tirthajyoti Ghosh
        </div>
        <div className="book-buttons">
          <div>Comments</div>
          <div>|</div>
          <div role="button" tabIndex="-2" className="remove" onClick={() => handleRemoveBook(book)}>Remove</div>
          <div>|</div>
          <div>Edit</div>
        </div>
      </div>
      <div className="completion">

      </div>
      <div className="divider">

      </div>
      <div className="chapter">

      </div>

    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
