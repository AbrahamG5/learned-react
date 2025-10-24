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
    <div className="flex flex-row bg-amber-500 justify-center items-center gap-10 text-center m-3 p-2 h-12 rounded-2xl">
      <span className="bg-white font-bold min-w-20 px-2 py-0 sm:py-0.5">
        {name}
      </span>
      <button
        /* onMouseEnter={() => {
        console.log(`Mouse enter ${name}`);
      }} */
        /* onClick={() => {
          handleClick();
        }} */
        onClick={handleAdd}
        className="bg-linear-to-br from-white to-sky-400 border-black border-2 rounded-t-2xl px-1 font-semibold w-10 hover:bg-amber-200 hover:rounded-2xl hover:border-amber-700 hover:scale-110 transition-all duration-400  hover:from-sky-600 hover:to-sky-400 hover:text-white"
      >
        +1
      </button>
      <span
        className={`px-3 w-10 border-2 border-sky-600 ${
          count === 1
            ? "text-amber-100 bg-amber-600 rounded-2xl"
            : "text-black bg-white"
        } transition-all duration-300 transform scale-105`}
      >
        {count}
      </span>
      <button
        className="bg-linear-to-br from-white to-sky-400 border-black border-2 rounded-b-2xl px-1 font-semibold w-10 hover:bg-amber-200 hover:rounded-2xl hover:border-amber-700 hover:scale-110 transition-all duration-400  hover:from-sky-600 hover:to-sky-400 hover:text-white"
        onClick={handleRest}
      >
        -1
      </button>
      <span
        className={`bg-amber-200 w-20 ${
          count === 1 ? "text-red-300" : "text-black"
        }`}
      >
        Tests
      </span>
    </div>
  );
};
