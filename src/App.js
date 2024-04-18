import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MoviesDetails from "./pages/MoviesDetails";
import NotFound from "./pages/NotFound";
import PopularFilms from "./pages/PopularFilms";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<PopularFilms />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
