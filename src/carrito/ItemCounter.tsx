import type { CSSProperties } from "react";

const sectionStyle: CSSProperties = {
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
};

interface Props {
  name: string;
  itemQuantity: number | undefined;
}

export const ItemCounter = ({ name, itemQuantity }: Props) => {
  return (
    <section style={sectionStyle}>
      <span style={itemSpanStyle}>{name}</span>
      <button>+1</button>
      <span style={counterSpanStyle}>{itemQuantity}</span>
      <button>-1</button>
    </section>
  );
};
