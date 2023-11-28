import React, { Component } from "react";
import Numberlistitem from "./numberlistItem/Numberlistitem";

class Numberlist extends Component {
  componentDidUpdate() {
    console.log("Numberlist Оновився");
    // Новий елемент додати в локал сторедж
  }
  render() {
    return (
      <ul>
        {this.props.data.map(({ id, name, phone }) => {
          return (
            <Numberlistitem
              key={id}
              name={name}
              number={phone}
              deletePhone={this.props.deletePhone}
              id={id}
            />
          );
        })}
      </ul>
    );
  }
}

export default Numberlist;

// rafce
