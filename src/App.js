import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
// import MoviesDetails from "./pages/MoviesDetails";
// import MoviesReview from "./pages/MoviesReview";
// import NotFound from "./pages/NotFound";
import { Suspense, lazy } from "react";
// import PopularFilms from "./pages/PopularFilms";
// import Search from "./pages/Search";
// lazy - відкладає імпорт компонента до того моменту поки людина не запросить цей компонент
const MoviesDetails = lazy(
  () => import("./pages/MoviesDetails") /* webpackChunkName: "MoviesDetails" */
);
const MoviesReview = lazy(
  () => import("./pages/MoviesReview") /* webpackChunkName: "MoviesReview" */
);
const NotFound = lazy(
  () => import("./pages/NotFound") /* webpackChunkName: "NotFound" */
);

const PopularFilms = lazy(
  () => import("./pages/PopularFilms") /* webpackChunkName: "PopularFilms" */
);
const Search = lazy(
  () => import("./pages/Search") /* webpackChunkName: "NotFound" */
);

function App() {
  return (
    <>
      <Header />
      {/* LOADER */}
      <Suspense fallback={<h1> ЗАВАНТАЖЕННЯ</h1>}>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<PopularFilms />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/reviews/:reviewsId" element={<MoviesReview />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
