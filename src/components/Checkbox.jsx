import React, { Component } from "react";

export default class Checkbox extends Component {
  state = {
    agreed: false,
  };

  change = (e) => {
    const { checked } = e.target;
    console.log(checked);
    this.setState({ agreed: checked });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          checked={this.state.agreed}
          onChange={this.change}
          name="name"
        />
        <input
          type="text"
          checked={this.state.agreed}
          onChange={this.change}
          name="група"
        />
        <input
          type="checkbox"
          checked={this.state.agreed}
          onChange={this.change}
          name="присутні"
        />
        <button type="submit" disabled={!this.state.agreed}>
          sdadas
        </button>
      </form>
    );
  }
}
