import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import RenderContext from "../contexts/RenderContext";

import "../css/UserForm.css";

class UserForm extends React.Component {
  static contextType = RenderContext;

  state = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    sex: "",
    age: "",
    weight: "",
    height: "",
    nutrition_objective: "",
    notes: "",
    injuries: "",
  };

  componentDidMount() {
    for (const prop in this.props.user) {
      this.setState({ [prop]: this.props.user[prop] });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Form noValidate validated={this.props.validated} className="user-form-form" onSubmit={(event) => this.props.onUserFormSubmit(event, this.state)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            name="first_name"
            type="text"
            placeholder="First name"
            defaultValue={this.state.first_name}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            name="last_name"
            type="text"
            placeholder="Last name"
            defaultValue={this.state.last_name}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Sex</Form.Label>
          <Form.Control
            as="select"
            required
            name="sex"
            value={this.state.sex}
            onChange={this.handleChange}
          >
            <option>male</option>
            <option>female</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">Please provide a sex.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type="text"
            name="age"
            placeholder="Age"
            defaultValue={this.state.age}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid age.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            required
            type="text"
            name="weight"
            placeholder="Weight"
            defaultValue={this.state.weight}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid weight.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Height</Form.Label>
          <Form.Control
            required
            name="height"
            type="text"
            placeholder="Height"
            defaultValue={this.state.height}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid height.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Objective</Form.Label>
          <Form.Control
            required
            name="nutrition_objective"
            type="text"
            placeholder="Objective"
            defaultValue={this.state.nutrition_objective}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid objective.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Injuries</Form.Label>
          <InputGroup>
            <Form.Control
              required
              name="injuries"
              type="text"
              placeholder="Height"
              defaultValue={this.state.injuries}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <InputGroup.Text>+</InputGroup.Text>
            </InputGroup.Append>
            <Form.Control.Feedback type="invalid">
              Please provide a valid injuries.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="user-form-notes-input">
          <Form.Label>Notes:</Form.Label>
          <Form.Control
            name="notes"
            as="textarea"
            rows="3"
            defaultValue={this.state.notes}
            onChange={this.handleChange}
          />
        </Form.Group>
        <div className="user-form-buttons">
          <Button type="submit" variant="success">
            Save
          </Button>
          <Button variant="danger" onClick={this.context.onDiscard}>
            Discard
          </Button>
        </div>
      </Form>
    );
  }
}

export default UserForm;
