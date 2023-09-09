import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Not items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectedIndex === index ? "list-group-item active" : "list-group"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
