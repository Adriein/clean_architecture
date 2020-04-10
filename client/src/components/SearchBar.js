import React from "react";
import Form from "react-bootstrap/Form";

import { MdSearch } from "react-icons/md";

import "../css/SearchBar.css";

class SearchBar extends React.Component {
  handleInputText = (event) => {
    this.props.handleSearchChange(event);
  };
  render() {
    return (
      <div className="overview-search">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton">
            <MdSearch />
          </button>
        </div>
        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="check">
            <Form.Check
              inline
              label="active"
              type={type}
              id={`inline-${type}-1`}
              onClick={this.props.toggleActive}
            />
            <Form.Check
              inline
              label="pending"
              type={type}
              id={`inline-${type}-2`}
              onClick={this.props.togglePending}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default SearchBar;
