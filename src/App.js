import React, { Component } from "react";
import Filter from "./components/filter/Filter";
import Form from "./components/form/Form";
import Numberlist from "./components/numberlist/Numberlist";

export default class App extends Component {
  // constructor() {
  //   super(props);

  // }
  state = {
    phones: [
      { id: 1, name: "Artur", phone: "735-07-97" },
      { id: 2, name: "Shos-nebyd", phone: "735-06-77" },
      { id: 3, name: "Hto-nebyd", phone: "735-09-57" },
      { id: 4, name: "Bird", phone: "735-08-17" },
    ],
    filter: "",
    error: true,
  };

  componentDidMount() {
    // HTTP req, event,timer
    // console.log("Компонент зарендерився");
    const storageData = localStorage.getItem("phones");
    console.log(storageData);
    const parsedStorageData = JSON.parse(storageData);
    console.log(parsedStorageData);

    if (parsedStorageData) {
      this.setState({
        phones: parsedStorageData,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Спрацьовує перед методом рендер і вказує чи має ререндиритись компонент якщо повертається false то ререндер не відбувається,якщо true то відбудеться
    if (nextState.phones === this.state.phones) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // Обовʼязково записувати умову,щоб не зациклити нашу дію.
    if (this.state.phones !== prevState.phones) {
      localStorage.setItem("phones", JSON.stringify(this.state.phones));
    }
  }

  componentDidCatch() {
    // слугує для обробки помилок та їх опрацювання
    this.setState({ error: true });
  }

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
    // ПРЯМЕ ОНОВЛЕННЯ СТЕЙТУ === ТАК РОБИТИ НІКОЛИ НЕ МОЖНА
    // this.state.filter = "PETRO";
  };

  filterByName = () => {
    const { phones, filter } = this.state;
    const filerPhones = phones.filter((phone) => {
      return phone.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filerPhones;
  };

  deletePhone = (id) => {
    // this.setState((prev) => ({
    //  phones: prev.phones.filter((item) => item.id !== id);
    // }));
    this.setState((prevState) => ({
      phones: prevState.phones.filter((item) => item.id !== id),
    }));
  };

  render() {
    // if (this.state.error === true) {
    //   <h1>Вибачте, сайт впав</h1>;
    // }
    // const phones = [
    //   { id: 1, name: "Artur", phone: "735-07-97" },
    //   { id: 2, name: "Shos-nebyd", phone: "735-06-77" },
    //   { id: 3, name: "Hto-nebyd", phone: "735-09-57" },
    //   { id: 4, name: "Bird", phone: "735-08-17" },
    // ];
    // PROPS READ ONLY
    // const { phones } = this.state;
    const { plusContact, plusFilter, filterByName, deletePhone } = this;
    const filterElements = filterByName();
    return (
      <>
        <h1>ПРИВІТ!</h1>
        <Form plusContact={plusContact} />
        <Filter plusFilter={plusFilter} />
        <Numberlist data={filterElements} deletePhone={deletePhone} />
      </>
    );
  }
}
