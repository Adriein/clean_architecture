import React from "react";

import UserTab from "./UserTab";

import UserContext from "../contexts/UserContext";
import CreateFeature from "./CreateFeature";

import "../css/Features.css"

class Feature extends React.Component {
  static contextType = UserContext;

  renderLogic(selectedUser) {
    if (selectedUser !== null && selectedUser !== undefined) {
      return <UserTab />;
    }
    return (
      <div className="feature-element">
        <CreateFeature type={"create user"} />
        <CreateFeature type={"create diet"} />
        <CreateFeature type={"create planning"} />
        <CreateFeature type={"create chart"} />
      </div>
    );
  }
  render() {
    return <div className="feature-container">{this.renderLogic(this.context.selectedUser)}</div>;
  }
}

export default Feature;
