import React from "react";

const GaleryItem = ({ paint }) => {
  const {
    author: { tag },
    price,
    quantity,
    title,
    url = "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  } = paint;

  return (
    <li>
      <img src={url} alt={tag} />
      <h2>{title}</h2>
      <p>Ціна:{price}</p>
      <p> Кількість:{quantity}</p>
      <button onClick={(e) => console.log("купити товар")}>купити товар</button>
    </li>
  );
};

export default GaleryItem;
