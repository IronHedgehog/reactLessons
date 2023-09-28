import PropTypes from "prop-types";

import GaleryItem from "../galeryItem/GaleryItem";

const GaleryList = ({ paintings }) => {
  const arr = paintings;

  return (
    <ul>
      {arr.map(({ id, ...paint }) => {
        return <GaleryItem key={id} paint={paint} />;
      })}
    </ul>
  );
};

GaleryList.propTypes = {
  paintings: PropTypes.array.isRequired,
};
export default GaleryList;
