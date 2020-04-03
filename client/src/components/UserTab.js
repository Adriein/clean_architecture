import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import UserView from "./UserView";
import UserForm from "./UserForm";

//Icons
import Close from "bootstrap-icons/icons/x-circle.svg";


class UserTab extends React.Component {
  renderLogic() {
    if (this.props.tabMode === "edit") {
      return <UserForm user={this.props.user} handleSubmit={this.props.handleSubmit} handleDiscard={this.props.handleDiscard} validated={this.props.validated}/>;
    } else {
      return <UserView user={this.props.user} handleEdit={this.props.handleEdit}/>;
    }
  }
  render() {
    return (
      <div className="usertab">
        <img
          className="close-logo"
          src={Close}
          alt=""
          width="25"
          height="25"
          title="close"
          onClick={this.props.handleClose}
        />
        <Tabs
          className="usertab-selector"
          defaultActiveKey="profile"
          activeKey={this.props.tabKey}
          onSelect={key => this.props.handleTabChange(key)}
        >
          <Tab className="usertab-element" eventKey="profile" title="Profile">
            {this.renderLogic()}
          </Tab>
          <Tab
            className="usertab-element"
            eventKey="plans"
            title="Plans"
            onSelect={key => this.props.handleTabChange(key)}
            disabled
          />
          <Tab className="usertab-element" eventKey="diet" title="Diets" disabled />
        </Tabs>
      </div>
    );
  }
}

export default UserTab;
