import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Hawaii", "London", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
