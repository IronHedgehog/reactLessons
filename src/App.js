import axios from "axios";
import { Component } from "react";
import { ColorRing } from "react-loader-spinner";
import Error from "./components/Error/Error";
import NewsList from "./components/newsList/NewsList";

class App extends Component {
  state = {
    news: [],
    isLoading: false,
    // errorCode:
    // errorMessage:
    error: null,
  };

  async componentDidMount() {
    //   Перед асинхронною операцією встановлюємо isLoading true
    // try = cпробувати зробити запит
    // catch = якщо не вийшло впіймаї помилку
    // finaly = Код який ми напишем в finaly виконається в будь якому разі.
    try {
      this.setState({ isLoading: true });
      // Виконуємо асиннхронну операцію (запит на сервер тощо)
      const fetch = await axios.get("https://hn.agolia.com/api/v1/search");
      // Обробляємо дані приводимо їх до нормального виду
      const data = fetch.data.hits;
      // Зберігаєм данні для подальшої роботи і скидаєм лоадер isLoading: false
      this.setState({ news: data, isLoading: false });
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        this.setState({ error: "Сервер ліг,коли встане наберу" });
      }
      // console.log(error.code + " " + error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { news, isLoading, error } = this.state;
    return (
      <>
        {error && <Error message={error} />}
        {isLoading === true ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <NewsList data={news} />
        )}
      </>
    );
  }
}

export default App;
