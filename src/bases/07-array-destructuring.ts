const nombresPersonajes: string[] = ["Pepe", "Nery", "Matías"];

const [, p2,] = nombresPersonajes;
console.log({ p2 });

const [, , p3] = nombresPersonajes;
console.log({ p3 });


//Desestructurar arrays con tipos estrictos

const returnsArrayFn = () => {
    return ["Abc", 123] as const; //esto hace que siempre se sepa que se va a devolver un string y un numero en esas posiciones
}

const [letters, numbers] = returnsArrayFn()

console.log({ letters, numbers });




//Tarea
//Mío

const name2 = (nombre: string) => {
    return nombre;
}
const useState = (name: string) => {
    return [name, name2] as const
}

const [name, setName] = useState("Abraham")
console.log(name, setName("Hachi"));


//Correcto

const useState2 = (value: string) => {
    return [value, (sndValue: string) => {
        console.log(sndValue)
    }] as const
}
const [sndName, sndSetName] = useState2("Matías")
console.log(sndName);
sndSetName("Nery")



/* const setName = (nombre: string) => {return nombre}
const useState = () => {
    return ["Abraham",] as const
}

const [name, setName] = useState()

console.log({name});
console.log({setName("Hachi")}); */
