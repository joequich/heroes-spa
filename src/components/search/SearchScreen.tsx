import React, {
    ChangeEvent,
    FormEvent,
    useMemo,
    useState,
} from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { IHeroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }: RouteComponentProps) => {
    const location = useLocation<string>();
    const { q } = queryString.parse(location.search);

    const query = Array.isArray(q) ? q[0] : q || '';

    const [input, setInput] = useState(query);
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const heroesFiltered: IHeroes[] = useMemo(() => getHeroesByName(query), [
        query,
    ]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`?q=${input}`);
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch} className="d-grid gap-2">
                        <input
                            type="text"
                            name="search"
                            placeholder="Find your hero"
                            autoComplete="off"
                            className="form-control"
                            value={input}
                            onChange={handleInput}
                        />
                        <button
                            type="submit"
                            className="btn mt-1 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {query === '' && (
                        <div className="alert alert-info">Search a hero</div>
                    )}
                    {query !== '' && heroesFiltered.length === 0 && (
                        <div className="alert alert-danger">There is no a hero with {query}</div>
                    )}
                    {heroesFiltered.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
