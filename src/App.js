import React, { Component } from "react";
import Buttons from "./components/buttons/Buttons";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (e) => {
    const { name } = e.target;
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    const buttonNames = Object.keys(this.state);

    return (
      <>
        <div>Leave you feedback</div>
        <Buttons data={buttonNames} onClick={this.onClick} />
      </>
    );
  }
}
