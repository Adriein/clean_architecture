import React from "react";
import UserContext from "../contexts/UserContext";

const withClose = (WrappedComponent) => {
  class WithClose extends React.Component {
    static contextType = UserContext;

    onClose = () => {
      this.context.onUserSelect(0);
    };
    render() {
      return <WrappedComponent onClose={this.onClose} {...this.props} />;
    }
  }
  return WithClose;
};

export default withClose;
