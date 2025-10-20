import { useState } from "react";

import "./ItemCounter.css";

/* const sectionStyle: CSSProperties = {
  borderRadius: 10,
  backgroundColor: "#f79292ff",
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: 5,
  justifyContent: "center",
  marginTop: 20,
};

const counterSpanStyle: CSSProperties = {
  padding: 4,
  textAlign: "center",
  alignContent: "center",
  backgroundColor: "#fafafa",
  borderRadius: 5,
};

const itemSpanStyle: CSSProperties = {
  backgroundColor: "#ffff",
  width: 100,
  padding: 2,
  textAlign: "center",
  borderRadius: 5,
}; */

interface Props {
  name: string;
  itemQuantity: number | undefined;
}

export const ItemCounter = ({ name, itemQuantity = 1 }: Props) => {
  const [count, setCount] = useState(itemQuantity);

  const handleAdd = () => {
    if (count === 1) {
      return;
    }
    return setCount(count + 1);
  };
  const handleRest = () => {
    if (count === 1) {
      return;
    }
    return setCount(count - 1);
  };

  /* const handleClick = () => {
    console.log(`Click en ${name}`);
  }; */
  return (
    <section className="sectionStyle">
      <span className="itemSpanStyle">{name}</span>
      <button
        /* onMouseEnter={() => {
        console.log(`Mouse enter ${name}`);
      }} */
        /* onClick={() => {
          handleClick();
        }} */
        onClick={handleAdd}
      >
        +1
      </button>
      <span className="counterSpanStyle">{count}</span>
      <button onClick={handleRest}>-1</button>
      <span
        className="itemTestStyle"
        style={{
          color: count === 1 ? "red" : "black",
        }}
      >
        Tests
      </span>
    </section>
  );
};
