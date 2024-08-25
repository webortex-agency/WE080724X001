import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    navbarLinks: [
      {
        id: 1,
        pageName: "Services",
        path: "#services",
        type: "section",
      },
      {
        id: 2,
        pageName: "Projects",
        path: "#projects",
        type: "section",
      },
      {
        id: 3,
        pageName: "About",
        path: "/about",
        type: "route",
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
