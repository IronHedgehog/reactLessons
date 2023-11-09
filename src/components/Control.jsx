import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class Control extends Component {
  newID = nanoid();

  state = {
    login: "",
    password: "",
    email: "",
  };

  changeValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    console.log({ id: this.newID, [name]: value });
    // this.props.addPhone({ id: this.newID, [name]: value });
  };

  submit = (e) => {
    this.reset();
  };

  reset = () => {
    this.setState({ login: "", password: "", email: "" });
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <label htmlFor={this.newID}>
          Login
          <input
            id={this.newID}
            type="text"
            placeholder="Login"
            value={this.state.login}
            onChange={this.changeValue}
            name="login"
          />
        </label>
        <label>
          E-mail
          <input
            type="text"
            placeholder="Login"
            value={this.state.email}
            onChange={this.changeValue}
            name="email"
          />
        </label>
        <label>
          Password
          <input
            type="text"
            placeholder="Login"
            value={this.state.password}
            onChange={this.changeValue}
            name="password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      //   <input
      //     type="text"
      //     value={this.state.inputValue}
      //     onChange={this.changeValue}
      //   />
    );
  }
}

// rcc
