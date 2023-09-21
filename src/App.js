import "./App.css";
import { FriendsList } from "./components/friends/friendsList/FriendsList";
import Profile from "./components/profile/profile/Profile";

function App() {
  const array = [];

  return (
    // React.Fragment
    <>
      <FriendsList />

      {array.length ? <Profile /> : null}
    </>
  );
}

export default App;
