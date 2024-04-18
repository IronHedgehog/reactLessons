import React, { useEffect, useState } from "react";
import fetchTrendingFilms from "../API/FilmsApi";
import FormSearch from "../components/movies/formSearch/FormSearch";
import MoviesList from "../components/movies/moviesList/MoviesList";

const Search = () => {
  const [data, setData] = useState([]);
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    if (keyWord) {
      fetchTrendingFilms(keyWord).then(setData);
    }
  }, [keyWord]);

  const getKeyWord = (keyWord) => {
    setKeyWord(keyWord);
  };

  return (
    <>
      <FormSearch getKeyWord={getKeyWord} />
      <MoviesList data={data} />
      {/* <Search /> */}
    </>
  );
};

export default Search;
