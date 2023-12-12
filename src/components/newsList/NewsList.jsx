import React from "react";
import NewsItem from "./newsItem/NewsItem";

const NewsList = ({ data }) => {
  return (
    <ul>
      {data.map(({ objectID, url, title }) => (
        <NewsItem key={objectID} id={objectID} url={url} title={title} />
      ))}
    </ul>
  );
};

export default NewsList;
