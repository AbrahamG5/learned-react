import { ItemCounter } from "./carrito/ItemCounter";

interface ItemInCart {
  productName: string;
  itemQuantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: `Switch`, itemQuantity: 1 },
  { productName: "Xbox", itemQuantity: 4 },
  { productName: "PS5", itemQuantity: 10 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Omaigoto its react</h1>
      {itemsInCart.map(({ productName, itemQuantity }) => (
        <ItemCounter
          key={productName}
          name={productName}
          itemQuantity={itemQuantity}
        />
      ))}
      {/*  <p>Esto es un párrafo</p>
      <button>Click</button>
      <div>
        <h2>Esto es un h2 dentro de un div</h2>
      </div> */}
      {/*       <ItemCounter name="Coso 1" itemQuantity={7} />
      <ItemCounter name="Coso 2" itemQuantity={7} />
      <ItemCounter name="Coso 3" itemQuantity={7} />
      <ItemCounter name="Coso 4" itemQuantity={7} /> */}
    </>
  );
}
