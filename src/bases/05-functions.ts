function saludo(nombre:string): string {
    return `Hola ${nombre}`
    //return 1245 ERROR
}

const saludo2 = (nombre:string):string => {
    return `Hola ${nombre}`
}

//También se puede hacer:
//const saludo3 = (nombre:string) => `Hola ${nombre}`

const mensaje = saludo('Abraham')
const mensaje2 = saludo2('Hachi')
console.log({mensaje, mensaje2});

//Coso


interface Usuario {
    uid: string;
    username: string;
}

function obtenerUsuario():Usuario {
    return {
        uid: '124-A',
        username: 'HachiGames',
        //age: 19 //Error en TS por no estar especificado en la interfaz, pero JS lo ejecuta
    }
}

const obtenerUsuario2 = () => {
    return {
        uid: '124-A',
        username: 'HachiGames'
    }
}

//El paréntesis después de la flecha simboliza un return implícito para el objeto
const obtenerUsuario3 = () => ({
    uid: '12dfa',
    username: "AbrahamGames"
})
const usuario = obtenerUsuario();
const usuario2 = obtenerUsuario2();
const usuario3 = obtenerUsuario3();
console.log({usuario, usuario2, usuario3});



//Uso de flechas

const misNumeros: number[] = [1, 2, 3, 4, 5, 6];

/* misNumeros.forEach(function(value) {
    console.log({value});  
}) */       //Esto es un callback (una función que se le pasa como valor a un for)

misNumeros.forEach((value) => {
    console.log({value});
});

