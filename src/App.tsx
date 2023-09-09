import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListComponent";
function App() {
  let items = [
    "New York",
    "San fransico",
    "India",
    "Australia",
    "Pakistan",
    "Indonesia",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    console.log("clicked");
  };

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button
        color="danger"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
