import React from "react";
import PropTypes from "prop-types";
import "./BooksList.css";
import { strings } from "../constants/Messages";

export default function BooksList(props) {
  const { data: books = [], onEditClick } = props;

  const handleEditBook = bookToUpdate => {
    onEditClick(bookToUpdate);
  };

  const renderBook = book => {
    const {
      title = "",
      authors = [],
      description = "",
      averageRating = 0
    } = book;

    const authorNames = authors.join(" , ");
    return (
      <div className="bookslist-container" onClick={() => handleEditBook(book)}>
        <div className="bookslist-top-container">
          <div className="bookslist-title">{title}</div>
          <div />
        </div>
        <div className="bookslist-description-container">
          <div className="bookslist-description-text">{description}</div>
          <div className="bookslist-authors">{authorNames}</div>
        </div>
        <div className="bookslist-bottom-container">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="bookslist-rating">{strings.rating}</div>
            <div className="bookslist-rating ratingcount">{averageRating}</div>
          </div>
          <div className="image" onClick={() => {}}>
            <div className="bookslist-rating ratingcount onHover">
              {strings.edit}
            </div>
          </div>
        </div>
      </div>
    );
  };

  let listBody = <div className="error">{strings.booksNotFound}</div>;

  if (books.length > 0) {
    listBody = books.map(book => {
      return renderBook(book);
    });
  }
  return <div>{listBody}</div>;
}

BooksList.propTypes = {
  data: PropTypes.array,
  onEditClick: PropTypes.func
};

BooksList.defaultProps = {
  data: [],
  onEditClick: () => {}
};
