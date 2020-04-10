import React from "react";

const Context = React.createContext();

export class RenderStore extends React.Component {
  state = { edit: false };

  onEdit = () => {
    this.setState({ edit: true });
  };

  onDiscard = () => {
    this.setState({ edit: false });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onEdit: this.onEdit, onDiscard: this.onDiscard }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
