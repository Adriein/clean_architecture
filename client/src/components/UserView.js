import React from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";

import RenderContext from "../contexts/RenderContext"

//Icons
import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

import "../css/UserView.css";

class UserView extends React.Component {
  static contextType = RenderContext;

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
      avatar,
      user_status,
    } = this.props.user;

    const userStatus = user_status ? "active" : "inactive";
    const dinamicUserStatus = user_status ? "success" : "danger";

    return (
      <div className="user-view-container">
        <div className="user-view-img-section">
          <div className="img-header">
            <Image className="usertab-profile-img" src={avatar} rounded width={200} height={200} />
            <Badge pill variant={dinamicUserStatus} className="profile-active-indicator">
              {`${userStatus}`}
            </Badge>
            <ProgressBar now={level} label={`Level: ${level}%`} />
          </div>
          <div className="usertab-personal-info">
            <h4>Personal Info:</h4>
            <p>Name: {first_name}</p>
            <p>Last Name: {last_name}</p>
            <p>Email: {email}</p>
          </div>
          <div className="buttons">
            <div className="each-button">
              <MdCreate className="edit-logo" onClick={this.context.onEdit}/>
            </div>
            <div className="each-button">
              <MdDelete className="delete-logo" />
            </div>
            <div className="each-button">
              <MdMailOutline />
              <Badge pill variant="info" className="inbox-info">
                0
              </Badge>
            </div>
          </div>
        </div>
        <div className="user-view-nutrition-info">
          <h4>Nutritional Info:</h4>
          <p>Sex: {sex}</p>
          <p>Age: {age}</p>
          <p>Level: {level}</p>
          <p>Weight: {weight} kg</p>
          <p>Height: {height} cm</p>
          <p>Objective: {nutrition_objective}</p>
          <p>Injuries: {injuries}</p>
        </div>

        <Form.Group>
          <Form.Label>Notes:</Form.Label>
          <Form.Control as="textarea" rows="3" disabled value={notes} />
        </Form.Group>
      </div>
    );
  }
}

export default UserView;
