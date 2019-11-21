import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../redux/bookmart/actions";
import SearchField from "../components/SearchField";
import BooksList from "../components/BooksList";
import { strings } from "../constants/Messages";
import { booksListData } from "../mockdata/BooksListData";
import "./Books.css";

const { getBooks } = actions;

class Books extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  handleSearch = (actionName, query) => {
    switch (actionName) {
      case "search":
        console.log("** query **", query);
        break;
      case "add":
        break;
      default:
        break;
    }
  };

  render() {
    const { books } = this.props;
    return (
      <div className="books-container">
        <div className="books-mainTitle">{strings.bookMart}</div>
        <SearchField onClickOfSearch={this.handleSearch} />
        <div className="books-divider" />
        <div className="books-list-container">
          <BooksList data={books} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { booksState = {} } = state;
  const { books = [] } = booksState;
  return { books };
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => {
    dispatch(getBooks());
  }
});

Books.propTypes = {
  fetchGoals: PropTypes.func
};

Books.defaultProps = {
  updateBook: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
