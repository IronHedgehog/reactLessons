import React from "react";

// id = видалить
const NewsItem = ({ id, url = "https//blalsdlalsdlsa", title }) => {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
};

export default NewsItem;
