import React, { Component } from "react";
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
  render() {
    const { phones } = this.state;
    return (
      <>
        <Form />
        <Numberlist data={phones} />
      </>
    );
  }
}
