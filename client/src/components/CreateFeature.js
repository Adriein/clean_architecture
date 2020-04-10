import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

class CreateFeature extends React.Component {
  render() {
  return <Jumbotron>{this.props.type}</Jumbotron>;   
  }
}

export default CreateFeature;
