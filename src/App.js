import "./App.css";
import Container from "./components/container/Container";
import { FriendsList } from "./components/friends/friendsList/FriendsList";
import Profile from "./components/profile/profile/Profile";
import Galery from "./pages/Galery";

function App() {
  const array = [];
  const message = "";
  const title = "";

  return (
    // React.Fragment
    <Container>
      <div>
        <h1>Hello</h1>

        {title && <p> {title}</p>}
        {message.length > 0 && <p>кількість символів {message.length}</p>}
      </div>
      <FriendsList />

      {array.length ? <Profile /> : null}
      {/* && || & ?: */}
      <Galery />
      <button onClick={console.log("b")}>s</button>
    </Container>
  );
}

export default App;
