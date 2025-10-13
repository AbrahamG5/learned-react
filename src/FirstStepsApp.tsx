import { ItemCounter } from "./carrito/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Omaigoto its react</h1>
      {/*  <p>Esto es un párrafo</p>
      <button>Click</button>
      <div>
        <h2>Esto es un h2 dentro de un div</h2>
      </div> */}
      <ItemCounter name="Coso 1" itemQuantity={7} />
      <ItemCounter name="Coso 2" itemQuantity={7} />
      <ItemCounter name="Coso 3" itemQuantity={7} />
      <ItemCounter name="Coso 4" itemQuantity={7} />
    </>
  );
}
