import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../redux/bookmart/actions";

const { updateBook } = actions;

class Books extends Component {
  componentDidMount() {
    const { updateBook } = this.props;
    updateBook();
  }

  render() {
    return <div>Books page</div>;
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
