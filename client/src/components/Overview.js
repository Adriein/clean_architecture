import React from "react";
import UserCard from "./UserCard";
import Card from "react-bootstrap/Card";
import SearchBar from "./SearchBar";

import UserContext from "../contexts/UserContext";

import "../css/Overview.css"

class Overview extends React.Component {
  static contextType = UserContext;

  state = {
    searchTerm: "",
    active: false,
    pending: false,
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  toggleActive = () => {
    this.setState({ active: !this.state.active });
  };

  togglePending = () => {
    this.setState({ pending: !this.state.pending });
  };

  render() {
    const activeUsers = this.context.users.map((user) => {
      const fullName = `${user.first_name} ${user.last_name}`;
      if (fullName.toLowerCase().indexOf(this.state.searchTerm) === -1) {
        return null;
      }
      if (this.state.active && user.user_status !== true) {
        return null;
      }

      return <UserCard key={user.id} user={user} />;
    });

    return (
      <Card className="overview">
        <Card.Header>
          <SearchBar
            term={this.state.searchTerm}
            handleSearchChange={this.handleSearchChange}
            toggleActive={this.toggleActive}
            togglePending={this.togglePending}
          />
        </Card.Header>
        <div className="overview-scroll">{activeUsers}</div>
      </Card>
    );
  }
}

export default Overview;
