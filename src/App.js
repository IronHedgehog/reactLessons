import "./App.css";
import { FriendsList } from "./components/friends/friendsList/FriendsList";
import Profile from "./components/profile/profile/Profile";

function App() {
  const array = [];
  const message = "";
  const title = "";

  return (
    // React.Fragment
    <>
      <div>
        <h1>Hello</h1>

        {title && <p> {title}</p>}
        {message.length > 0 && <p>кількість символів {message.length}</p>}
      </div>
      <FriendsList />

      {array.length ? <Profile /> : null}
    </>
  );
}

export default App;
