import React from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import Edit from "bootstrap-icons/icons/pencil.svg";
import Delete from "bootstrap-icons/icons/trash.svg";

class UserView extends React.Component {
  render() {
    const {
      email,
      first_name,
      last_name,
      sex,
      age,
      level,
      weight,
      height,
      nutrition_objective,
      notes,
      injuries,
      avatar
    } = this.props.user;

    return (
      <Container className="usertab-element-infoContainer">
        <Row>
          <Col xs={6} className="usertab-element-personal">
            <Row>
              <Col xs={6} className="usertab-img-container">
                <Image className="usertab-profile-img" src={avatar} rounded />
              </Col>
              <Col xs={6} className="usertab-profile-logo">
                <img
                  src={Edit}
                  alt=""
                  width="30"
                  height="30"
                  title="edit"
                  className="edit-logo"
                  onClick={this.props.handleEdit}
                />
                <img
                  src={Delete}
                  alt=""
                  width="30"
                  height="30"
                  title="delete"
                  className="delete-logo"
                  onClick={this.props.handleClose}
                />
              </Col>
            </Row>
            <div className="usertab-progressbar">
              <ProgressBar now={level} label={`Level: ${level}%`} />
            </div>
            <p>Name: {first_name}</p>
            <p>Last Name: {last_name}</p>
            <p>Email: {email}</p>
          </Col>
          <Col xs={6} className="usertab-element-nutrition">
            <p>Sex: {sex}</p>
            <p>Age: {age}</p>
            <p>Level: {level}</p>
            <p>Weight: {weight} kg</p>
            <p>Height: {height} cm</p>
            <p>Objective: {nutrition_objective}</p>
            <p>Injuries: {injuries}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Notes:</Form.Label>
              <Form.Control as="textarea" rows="3" disabled value={notes} />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserView;
