import React from "react";
import axios from "axios";
import querystring from "querystring";

import RenderContext from "./RenderContext";

const Context = React.createContext();

export class UserStore extends React.Component {
  static contextType = RenderContext;

  state = { users: [], selectedUser: null, formValidated: false };

  onUserChange = (user) => {
    this.setState({ users: user });
  };

  onUserSelect = (id) => {
    const selectedUser = this.state.users.find((user) => id === user.id);
    this.setState({ selectedUser });
  };

  onUserFormSubmit = async (event, body) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      this.setState({
        selectedUser: (
          await axios({
            method: "PUT",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: querystring.stringify(body),
            url: `/api/admin/profile/${body.id}`,
          })
        ).data[0],
      });
      this.context.onDiscard();
    }

    this.setState({ formValidated: true });
  };

  async componentDidMount() {
    this.setState({ users: (await axios.get("/api/admin/overview")).data });
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onUserChange: this.onUserChange,
          onUserSelect: this.onUserSelect,
          onUserFormSubmit: this.onUserFormSubmit,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
