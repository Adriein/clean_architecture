import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

class UserCard extends React.Component {
  handleCardClick = event => {
    this.props.handleCardClick(this.props.id);
  };
  render() {
    return (
      <Card className="overview-card" onClick={this.handleCardClick}>
        <Card.Body className="overview-card-body">
          <Image className="overview-card-img" src={this.props.user.avatar} roundedCircle />
          <p className="overview-card-text">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
        </Card.Body>
      </Card>
    );
  }
}

export default UserCard;
