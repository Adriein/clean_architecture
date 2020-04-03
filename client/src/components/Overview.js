import React from "react";
import UserCard from "./UserCard";
import Card from "react-bootstrap/Card";
import SearchBar from "./SearchBar";

class Overview extends React.Component {
  render() {
    const activeUsers = this.props.users.map(user => {
      if (
        user.first_name.toLowerCase().indexOf(this.props.term) === -1 &&
        user.last_name.toLowerCase().indexOf(this.props.term) === -1
      ) {
        return null;
      }
      if (this.props.active && user.user_status !== true) {
        return null;
      }

      return (
        <UserCard
          key={user.id}
          id={user.id}
          user={user}
          handleCardClick={this.props.handleCardClick}
        />
      );
    });

    return (
      <Card className="overview">
        <Card.Header>
          <SearchBar
            term={this.props.term}
            handleSearchChange={this.props.handleSearchChange}
            toggleActive={this.props.toggleActive}
            togglePending={this.props.togglePending}
          />
        </Card.Header>
        <div className="overview-scroll">{activeUsers}</div>
      </Card>
    );
  }
}

export default Overview;
