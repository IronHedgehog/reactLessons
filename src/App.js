import { Component } from "react";
import Checkbox from "./components/Checkbox";
// ПРИКЛАД НЕКОНТРОЛЬОВАНОЇ ФОРМИ
export default class App extends Component {
  state = {
    filter: "",
  };

  filterChange = (values) => {
    this.setState({ filter: values });
  };

  render() {
    //
    return <Checkbox />;
    //  <Uncontrol onSubmit={(values) => console.log(values)} />;
    // <Control filterChange={this.filterChange} />;
  }
}

// onSubmit, onInput
