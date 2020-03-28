import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Menu from "./components/Menu";
import Overview from "./components/Overview";
import Feature from "./components/Feature";

import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    searchTerm: "",
    active: false,
    pending: false,
    clicked: 0,
    user: []
  };

  async componentDidMount() {
    this.setState({ users: (await axios.get("/api/admin/overview")).data });
  }

  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  toggleActive = event => {
    this.setState({ active: !this.state.active });
  };

  togglePending = event => {
    this.setState({ pending: !this.state.pending });
  };

  handleCardClick = async id => {
    this.setState({ user: (await axios.get(`/api/admin/profile/${id}`)).data });
    this.setState({ clicked: id });
  };

  renderContent(id) {
    if (id !== 0) {
    return <div>id: {id} name: {this.state.user[0].first_name} level: {this.state.user[0].level}</div>;
    }
    return (
      <div>
        <Row>
          <Col>
            <Feature />
            <Feature />
          </Col>
        </Row>
        <Row>
          <Col>
            <Feature />
            <Feature />
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    return (
      <Container fluid className="main-container">
        <Row className="main-row">
          <Col xs={2} className="menu-col">
            <Menu />
          </Col>
          <Col xs={3} className="overview-col">
            <Overview
              users={this.state.users}
              term={this.state.searchTerm}
              handleSearchChange={this.handleSearchChange}
              toggleActive={this.toggleActive}
              togglePending={this.togglePending}
              active={this.state.active}
              handleCardClick={this.handleCardClick}
            />
          </Col>
          <Col xs={7} className="feature-col">
            {this.renderContent(this.state.clicked)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
