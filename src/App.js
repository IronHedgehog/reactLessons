import React, { Component } from "react";
import Filter from "./components/filter/Filter";
import Form from "./components/form/Form";
import Numberlist from "./components/numberlist/Numberlist";

export default class App extends Component {
  state = {
    phones: [
      { id: 1, name: "Artur", phone: "735-07-97" },
      { id: 2, name: "Shos-nebyd", phone: "735-06-77" },
      { id: 3, name: "Hto-nebyd", phone: "735-09-57" },
      { id: 4, name: "Bird", phone: "735-08-17" },
    ],
    filter: "",
  };

  plusContact = (contact) => {
    if (
      this.state.phones.find(
        (phone) => phone.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert("Такий контакт вже є");
    } else {
      this.setState((prev) => ({
        phones: [...prev.phones, contact],
      }));
    }
  };

  plusFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    const { phones } = this.state;
    const { plusContact, plusFilter } = this;
    return (
      <>
        <Form plusContact={plusContact} />
        <Filter plusFilter={plusFilter} />
        <Numberlist data={phones} />
      </>
    );
  }
}
