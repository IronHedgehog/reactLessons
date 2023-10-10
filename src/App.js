import "./App.css";
import Alert from "./components/alert/Alert";

const alertStyles = {
  padding: 20,
  margin: "12em 20rem",
  color: "yellow",
  backgroundColor: "blue",
};

function App() {
  const array = [1, 2, 3, 4, 5];
  const message = "";
  const title = "";

  return (
    <>
      {/* <ReceiptsList data={recipies} /> */}
      <Alert type="ok">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
        doloribus!
      </Alert>
      <Alert type="warning">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
        doloribus!
      </Alert>
      <Alert type="error">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
        doloribus!
      </Alert>

      <Alert type="unsupported">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
        doloribus!
      </Alert>
    </>
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
