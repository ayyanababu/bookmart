import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchField.css";

export default function SearchField(props) {
  const { onClickOfSearch } = props;
  const [searchString, setSearchString] = useState("");

  const onChangeOfSearchQuery = event => {
    const {
      target: { value }
    } = event;
    setSearchString(value);
  };

  const handleSearch = () => {
    onClickOfSearch(searchString);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        value={searchString}
        className="inputField"
        onChange={onChangeOfSearchQuery}
        placeholder={"Type here to search a book..."}
      />
      <div onClick={handleSearch} className="search_button">
        <span className="search_button_title">Search</span>
      </div>
    </div>
  );
}

SearchField.propTypes = {
  onClickOfSearch: PropTypes.func
};

SearchField.defaultProps = {
  onClickOfSearch: () => {}
};
