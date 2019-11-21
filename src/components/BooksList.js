import React from "react";
import PropTypes from "prop-types";

export default function BooksList(props) {
  const { data: books = [] } = props;
  return (
    <div>
      {books.map(book => {
        const { title } = book;
        return <div style={{ margin: "10px" }}>{title}</div>;
      })}
    </div>
  );
}

BooksList.propTypes = {
  data: PropTypes.array
};

BooksList.defaultProps = {
  data: []
};
