import axios from "axios";

// Виконуємо асиннхронну операцію (запит на сервер тощо)
// promise має 3 стани =  pending, reject, fulfilled
const fetchNewsWithQuery = async (query) => {
  const request = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  // Обробляємо дані приводимо їх до нормального виду
  const data = request.data.hits;
  return data;
};

const API = {
  fetchNewsWithQuery,
};
export default API;
