import { FriendsStatus } from "./FriendsStatus.styled.js";

export const FriendsItem = (props) => {
  return (
    <li>
      <FriendsStatus isOnline={props.isOnline}>
        <img src={props.avatar} alt={props.name} width={48} />
        <p>{props.name}</p>
      </FriendsStatus>
    </li>
  );
};
