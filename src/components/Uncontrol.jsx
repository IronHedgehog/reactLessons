import { Component } from "react";

export default class Uncontrol extends Component {
  onSubmitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    this.props.onSubmit({ login, password });
    form.reset();
  };
  render() {
    const { onSubmitForm } = this;
    return (
      <form onSubmit={onSubmitForm}>
        <label>
          E-mail
          <input type="text" name="login" placeholder="login" />
        </label>
        <label>
          password
          <input type="password" name="password" placeholder="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}
