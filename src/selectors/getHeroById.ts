import { heroes, IHeroes } from '../data/heroes';

export const getHeroById: (id: string) => IHeroes | undefined = (id: string) => {
    return heroes.find(hero => hero.id === id);
};
