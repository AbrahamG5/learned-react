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
    <section className="bg-linear-to-b from-sky-900 via-purple-200 to-sky-200 min-h-dvh content-center justify-center">
      <h1 className="text-4xl font-bold text-sky-700 text-shadow-2xs text-center mb-10 bg-linear-to-br from-sky-200  to-sky-300 max-w-fit border-sky-600 border-3 rounded-full p-3 m-auto shadow-2xl font-mono">
        Omaigoto its react
      </h1>
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
    </section>
  );
}
