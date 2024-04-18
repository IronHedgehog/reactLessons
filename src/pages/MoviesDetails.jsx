import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailsById } from "../API/FilmsApi";

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    movieId && fetchDetailsById(movieId).then(setMovieInfo);
  }, [movieId]);

  console.log(movieInfo);
  return (
    <>
      <button>Homepage</button>
      <button>Go back</button>

      {movieInfo && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400${movieInfo.poster_path}`}
            alt=""
          />
          <h1>{movieInfo.title}</h1>
          <h2>Genres</h2>
          <p>{movieInfo.genres.map(({ name }) => name).join(" ")}</p>
          <p>{movieInfo.overview}</p>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
