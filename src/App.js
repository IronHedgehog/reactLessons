import "./App.css";
import ReceiptsList from "./components/receipts/receiptsList/ReceiptsList";
import recipies from "./data/recipies.json";

function App() {
  const array = [1, 2, 3, 4, 5];
  const message = "";
  const title = "";

  return (
    <ReceiptsList data={recipies} />
    // React.Fragment
    // <Container data={array}>
    //   <div>
    //     <h1>Hello</h1>

    //     {title && <p> {title}</p>}
    //     {message.length > 0 && <p>кількість символів {message.length}</p>}
    //   </div>
    //   <FriendsList />

    //   {array.length ? <Profile /> : null}
    //   && || & ?:
    //   <Galery />
    //   <button onClick={console.log("b")}>s</button>
    // </Container>
  );
}

export default App;
