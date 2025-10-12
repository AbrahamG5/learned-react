import type { GiphyRandomResponse } from "./data/giphy.response";

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  telefono: number;
  ciudad: Ciudad;
}

type Ciudad = "Mexico" | "Puebla";

const persona1: Persona = {
  nombre: "Abraham",
  apellido: "Garcia",
  edad: 18,
  telefono: 2381330810,
  ciudad: "Puebla",
};

console.log(persona1);

const { nombre: Name, telefono: cell } = persona1;

console.log(`Persona1 nombre: ${Name} \nTeléfono: ${cell}`);

//Arrays
const personas: string[] = ["Matías", "Nery", "Hachi"];

console.log({ personas });

const [, negro] = personas;

console.log({ negro });

//async

const cosoImg = (url: string) => {
  const imagen = document.createElement("img");
  imagen.src = url;
  document.body.append(imagen);
};
const KEY = "p9uUHhXhhMShfVhLGB18wR96ZKcUJU0j";
const obtenerGifChico = async (): Promise<string> => {
  const consulta = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${KEY}`
  );
  const { data: datosGIF }: GiphyRandomResponse = await consulta.json();
  return datosGIF.images.downsized.url;
};
obtenerGifChico().then((url) => cosoImg(url));
