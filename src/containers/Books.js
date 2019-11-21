import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../redux/bookmart/actions";
import SearchField from "../components/SearchField";
import BooksList from "../components/BooksList";
import { strings, formData } from "../constants/Messages";
import Modal from "react-responsive-modal";
import Form from "../components/EditForm";
import "./Books.css";

const { getBooks, searchBook, reqUpdateBook } = actions;

class Books extends Component {
  state = {
    isOpen: false,
    isEdit: false,
    editBook: { ...formData }
  };

  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  handleSearch = (actionName, query) => {
    const { searchBookByQuery } = this.props;
    switch (actionName) {
      case "search":
        searchBookByQuery(query);
        break;
      case "add": {
        this.toggleModel();
        this.setState({
          isEdit: false,
          editBook: { ...formData }
        });
        break;
      }
      default:
        break;
    }
  };

  toggleModel = () => {
    const { isOpen, editBook } = this.state;
    const toggleFlag = !isOpen;

    let bookToEdit = { ...formData };
    if (toggleFlag) {
      bookToEdit = { ...editBook };
    }
    this.setState({
      isOpen: !isOpen,
      editBook: bookToEdit
    });
  };

  handleEdit = bookToUpdate => {
    this.setState({
      isOpen: true,
      isEdit: true,
      editBook: bookToUpdate
    });
  };

  onSubmit = (values, isEdit) => {
    const { updateBook } = this.props;
    const type = isEdit ? "edit" : "add";
    updateBook(values, type);
    this.toggleModel();
  };

  render() {
    const { books, filteredBooks, query } = this.props;
    const { isOpen, isEdit, editBook } = this.state;

    let booksData = books;
    if (filteredBooks.length > 0 || query.length !== 0) {
      booksData = filteredBooks;
    }
    return (
      <div className="books-container">
        <div className="books-mainTitle">{strings.bookMart}</div>
        <SearchField onClickOfSearch={this.handleSearch} />
        <div className="books-divider" />
        <div className="books-list-container">
          <BooksList data={booksData} onEditClick={this.handleEdit} />
        </div>
        <Modal open={isOpen} onClose={this.toggleModel} center>
          <Form onSubmit={this.onSubmit} data={editBook} isEdit={isEdit} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { booksState = {} } = state;
  const { books = [], filteredBooks = [], searchString = "" } = booksState;
  return { books, filteredBooks, query: searchString };
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => {
    dispatch(getBooks());
  },
  searchBookByQuery: query => {
    dispatch(searchBook(query));
  },
  updateBook: (book, type) => {
    dispatch(reqUpdateBook({ book, type }));
  }
});

Books.propTypes = {
  getBooks: PropTypes.func,
  searchBookByQuery: PropTypes.func,
  filteredBooks: PropTypes.array,
  books: PropTypes.array,
  searchString: PropTypes.string,
  updateBook: PropTypes.func
};

Books.defaultProps = {
  getBooks: () => {},
  searchBookByQuery: () => {},
  books: [],
  filteredBooks: [],
  searchString: "",
  updateBook: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
