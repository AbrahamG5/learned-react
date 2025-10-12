import { heroes, type Hero, Owner } from "./data/heroes.data"

const getHeroById = (id: number):Hero | undefined=>{
    const hero = heroes.find( (hero) => {
        return hero.id === id
    })
    if (!hero){
        throw new Error(`No existe un héroe con el id ${id}`)
    }
    return hero
}

//console.log(getHeroById(6));




//TAREA

export const getHeroByOwner = (ownerName: String):Hero | undefined => {
    const hero = heroes.find ((hero) => {
        return hero.owner === ownerName
    })
    return hero
}

//Corregido

export const obtenerHeroe = (owner : Owner) => {
    const heroesPorOwner = heroes.filter(hero => hero.owner === owner)
    return heroesPorOwner
}




//Ejercicio i wanted to do

export const obtenerHeroePorEdad = (edad : number) => {
    const heroePorEdad = heroes.filter((heroe) => heroe.age === edad)
    return heroePorEdad
}


