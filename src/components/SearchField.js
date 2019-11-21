import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchField.css";
import { strings } from "../constants/Messages";

export default function SearchField(props) {
  const { onClickOfSearch } = props;
  const [searchString, setSearchString] = useState("");

  const onChangeOfSearchQuery = event => {
    const {
      target: { value }
    } = event;
    setSearchString(value);
    onClickOfSearch("search", value);
  };

  const handleSearch = (event, action) => {
    event.stopPropagation();
    onClickOfSearch(action, searchString);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        value={searchString}
        className="inputField"
        onChange={onChangeOfSearchQuery}
        placeholder={strings.searchPlaceHolder}
      />
      <div
        onClick={event => handleSearch(event, "search")}
        className="button search"
      >
        <span className="button_title">{strings.search}</span>
      </div>
      <div onClick={event => handleSearch(event, "add")} className="button add">
        <span className="button_title">{strings.add}</span>
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
