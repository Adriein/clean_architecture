import React from "react";
import Form from "react-bootstrap/Form";

class SearchBar extends React.Component {
  handleInputText = event => {
    this.props.handleSearchChange(event);
  };
  render() {
    return (
      <div className="overview-search">
        <input
          type="text"
          placeholder="search..."
          value={this.props.term}
          onChange={this.handleInputText}
        />
        {["checkbox"].map(type => (
          <div key={`inline-${type}`}>
            <Form.Check inline label="active" type={type} id={`inline-${type}-1`} onClick={this.props.toggleActive}/>
            <Form.Check inline label="pending" type={type} id={`inline-${type}-2`} onClick={this.props.togglePending}/>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchBar;
