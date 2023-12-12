import axios from "axios";
import { Component } from "react";
import NewsList from "./components/newsList/NewsList";

class App extends Component {
  state = {
    news: [],
    isLoading: false,
  };

  async componentDidMount() {
    //   Перед асинхронною операцією встановлюємо isLoading true
    this.setState({ isLoading: true });
    // Виконуємо асиннхронну операцію (запит на сервер тощо)
    const fetch = await axios.get("https://hn.algolia.com/api/v1/search");
    // Обробляємо дані приводимо їх до нормального виду
    const data = fetch.data.hits;
    // Зберігаєм данні для подальшої роботи і скидаєм лоадер isLoading: false
    this.setState({ news: data, isLoading: false });
  }

  render() {
    const { news, isLoading } = this.state;
    console.log(isLoading);
    return <>{isLoading === true ? "LOADER" : <NewsList data={news} />}</>;
  }
}

export default App;
