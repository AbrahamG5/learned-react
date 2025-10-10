const nombresPersonajes:string[] = ["Pepe", "Nery", "Matías"];

const [, p2,] = nombresPersonajes;
console.log({p2});

const [, , p3] = nombresPersonajes;
console.log({p3});


//Desestructurar arrays con tipos estrictos

const returnsArrayFn = () => {
    return["Abc", 123] as const ; //esto hace que siempre se sepa que se va a devolver un string y un numero en esas posiciones
}

const [letters, numbers] = returnsArrayFn()

console.log({letters, numbers});
