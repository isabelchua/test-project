import Alert from "./Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  //   let items = ["New York", "San Francisco", "Hawaii", "London", "Tokyo"];

  //   const handleSelectItem = (item: string) => {
  //     console.log(item);
  //   };
  //  {/* <ListGroup
  //      items={items}
  //      heading="Cities"
  //      onSelectItem={handleSelectItem}
  //    /> */}

  return (
    <>
      <Alert>Hello World</Alert>
      <Button color="primary" onClick={() => console.log("first")}>
        My Button
      </Button>
    </>
  );
}

export default App;
