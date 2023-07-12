import Alert from "./Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
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
      {alertVisible && <Alert>Hello World</Alert>}

      <Button color="primary" onClick={() => setAlertVisibility(!alertVisible)}>
        My Button
      </Button>
    </>
  );
}

export default App;
