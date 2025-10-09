function saludo(nombre:string): string {
    return `Hola ${nombre}`
    //return 1245 ERROR
}

const saludo2 = (nombre:string):string => {
    return `Hola ${nombre}`
}

const mensaje = saludo('Abraham')
const mensaje2 = saludo2('Hachi')
console.log({mensaje, mensaje2});

//Coso

function obtenerUsuario() {
    return {
        uid: '124-A',
        username: 'HachiGames'
    }
}

const obtenerUsuario2 = () => {
    return {
        uid: '124-A',
        username: 'HachiGames'
    }
}
const usuario = obtenerUsuario();
const usuario2 = obtenerUsuario2();
console.log({usuario, usuario2});

