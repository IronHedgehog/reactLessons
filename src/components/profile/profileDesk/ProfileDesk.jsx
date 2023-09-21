import PropTypes from "prop-types";

const ProfileDesk = ({ username, tag, location, avatar }) => {
  return (
    <>
      <img src={avatar} alt="" />
      <p>{username}</p>
      <p>#{tag}</p>
      <p>{location}</p>
    </>
  );
};

export default ProfileDesk;

ProfileDesk.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
