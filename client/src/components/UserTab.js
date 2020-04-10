import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import UserView from "./UserView";
import UserForm from "./UserForm";

import UserContext from "../contexts/UserContext";
import RenderContext from "../contexts/RenderContext";

//Icons
import { MdClear } from "react-icons/md";

import withClose from "../hoc/withClose";

class UserTab extends React.Component {
  static contextType = RenderContext;

  renderLogic() {
    if (this.context.edit) {
      return (
        <UserContext.Consumer>
          {(userContext) => <UserForm user={userContext.selectedUser} validated={userContext.formValidated} onUserFormSubmit={userContext.onUserFormSubmit}/>}
        </UserContext.Consumer>
      );
    } else {
      return (
        <UserContext.Consumer>
          {(userContext) => <UserView user={userContext.selectedUser} />}
        </UserContext.Consumer>
      );
    }
  }
  render() {
    return (
      <div className="usertab">
        <MdClear className="close-logo" size="1.8em" onClick={this.props.onClose} />
        <Tabs className="usertab-selector" defaultActiveKey="profile">
          <Tab className="usertab-element" eventKey="profile" title="Profile">
            {this.renderLogic()}
          </Tab>
          <Tab className="usertab-element" eventKey="plans" title="Plans" disabled />
          <Tab className="usertab-element" eventKey="diet" title="Diets" disabled />
        </Tabs>
      </div>
    );
  }
}

export default withClose(UserTab);
