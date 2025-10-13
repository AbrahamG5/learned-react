import type { CSSProperties } from "react";

const nombre = "Abraham!!";
const apellido = "Garcia";
const juegosFavoritos = ["Monster Hunter", "Minecraft", "Terraria"];
const activo = false;

interface Direccion {
  codigoPostal: string;
  pais: string;
}
const direccion: Direccion = {
  codigoPostal: "80OPO",
  pais: "Mexico",
};

const styleH1Nombre: CSSProperties = {
  backgroundColor: activo ? "blue" : "red",
  borderRadius: 10,
  padding: 10,
  textAlign: "center",
};
export function MyAwesomeApp() {
  return (
    <>
      <h1
        style={
          styleH1Nombre
          /* backgroundColor: activo ? "blue" : "red",
          borderRadius: 10,
          padding: 10,
          textAlign: "center", */
        }
      >
        {nombre}
      </h1>
      <h3>{apellido}</h3>
      <p> {juegosFavoritos.join(",  ")} </p>
      <h1> {activo ? "Activo" : "Inactivo"} </h1>
      <p> {JSON.stringify(direccion)} </p>
    </>
  );
}
