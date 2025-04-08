import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook: allows us to tap into states in React (says this state will change)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //Note that react can't return more than one component so we wrap around everything around with a component
    //to get around this. Instead of div use Fragment so we don't introduce another element to DOM
    //can import Fragment from react or can do empty <> and it's registered as Fragment
    //JSX only allows HTML and other react components so we wrap in braces to allow code
    //If true, then second element rendered when using &&
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} //updates the index
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
