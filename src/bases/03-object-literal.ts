
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address
}

interface Address {
    postalCode: string;
    city: string;
}

const picaPapas: Person = {
    firstName: 'Pepe',
    lastName: 'Pecas',
    age: 22,
    address: {
        postalCode: '222232',
        city: 'Picaponte' 
    },
};


const hachi: Person = {
    firstName: "Hazel",
    lastName: "Silva",
    age: 19
}

hachi.address = {
    postalCode: 'abcde',
    city: 'Cristo Rey'

}

console.log(picaPapas);
console.log(hachi);

/* const nery = structuredClone(picaPapas)

nery.firsName = 'Nig';
nery.lastName = 'Ger';
nery.age = 17;
nery.address.postalCode = "09699"
nery.address.city = 'CuayuYork'
console.log(picaPapas, nery);
 */