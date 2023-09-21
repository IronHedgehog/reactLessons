import React from "react";
import user from "../../../data/user.json";
import ProfileDesk from "../profileDesk/ProfileDesk";
import ProfileStats from "../profileStats/ProfileStats";

const Profile = () => {
  const { stats, ...userData } = user;
  return (
    <React.Fragment>
      <ProfileDesk {...userData} />
      <ProfileStats {...stats} />
    </React.Fragment>
  );
};

export default Profile;
