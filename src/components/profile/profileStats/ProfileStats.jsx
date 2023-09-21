import PropTypes from "prop-types";

const ProfileStats = ({ followers, views, likes }) => {
  return (
    <ul>
      <li>
        <span>Followers </span>
        <span>{followers ? followers : 0}</span>
      </li>
      <li>
        <span>Views </span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes </span>
        <span>{likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
