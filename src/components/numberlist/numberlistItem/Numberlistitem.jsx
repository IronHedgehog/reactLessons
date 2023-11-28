import React, { Component } from "react";

class Numberlistitem extends Component {
  componentWillUnmount() {
    console.log("Видалили номер");
    //  Потрібен для зупинки таймерів, зняття слухача події HTTP- запити
  }
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
        <p>{this.props.number}</p>
        <button
          type="button"
          onClick={(e) => this.props.deletePhone(this.props.id)}
        >
          Видалити
        </button>
      </li>
    );
  }
}

export default Numberlistitem;
