import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchPopularFims } from "../API/FilmsApi";

const PopularFilms = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularFims().then(setMovies);
  }, []);

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: "/movies/" + movie.id,
                state: {
                  from: location,
                },
              }}
            >
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* <Routes>
        <Route path="/movies/:movieId" element={<MoviesDetails />}></Route>
      </Routes> */}
    </>
  );
};

export default PopularFilms;
