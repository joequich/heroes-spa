import { heroes, IHeroes } from '../data/heroes';

export const getHeroesByName: (name: string) => IHeroes[] | [] = (name: string) => {
    if (name === '') {
        return [];
    }
    
    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}