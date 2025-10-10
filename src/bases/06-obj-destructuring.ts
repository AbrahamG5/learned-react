interface Persona {
    name:string;
    age:number;
    key:string;
}

const person:Persona ={ 
    name: "Hazel",
    age: 19,
    key: "Hachichi"
}
/* 
const name = person.name;
const age = person.age;
const key = person.key; */

const {key, name: hachiName, age} = person;

console.log({hachiName, age, key});


interface Heroe{
    name:string;
    age:number;
    key:string;
    rank?:string
}

const useContext = ({key, name, age, rank}:Heroe) => {
    return {
        keyName : key,
        user:{
            name,
            age,
        },
        rank:rank
    }
}

const {
    keyName, 
    rank, 
    user
} = useContext(person)
const {name} = user
console.log({keyName, rank, name});
