import React from "react";
import "./css/App.css";
import Container from "react-bootstrap/Container";

import Menu from "./components/Menu";
import Overview from "./components/Overview";
import Feature from "./components/Feature";

import { UserStore } from "./contexts/UserContext";
import { RenderStore } from "./contexts/RenderContext";

class App extends React.Component {
  render() {
    return (
      <Container fluid className="main-container">
        <RenderStore>
          <UserStore>
            <div className="menu-col">
              <Menu />
            </div>
            <div className="main-features-col">
              <div className="overview-col">
                <Overview />
              </div>
              <div className="feature-col">
                <Feature />
              </div>
            </div>
          </UserStore>
        </RenderStore>
      </Container>
    );
  }
}

export default App;
