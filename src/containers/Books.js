import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../redux/bookmart/actions";
import SearchField from "../components/SearchField";

import "./Books.css";

const { updateBook } = actions;

class Books extends Component {
  componentDidMount() {
    const { updateBook } = this.props;
    updateBook();
  }

  handleSearch = query => {
    console.log("** query **", query);
  };

  render() {
    return (
      <div className="container">
        <div className="booksTitle">Book Mart</div>
        <SearchField onClickOfSearch={this.handleSearch} />
        <div className="divider" />
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
  updateBook: data => {
    dispatch(updateBook({}));
  }
});

Books.propTypes = {
  fetchGoals: PropTypes.func
};

Books.defaultProps = {
  updateBook: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
