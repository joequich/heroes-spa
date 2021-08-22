import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routes/AppRouter';
import { IStateAuth, IUserContextData } from './types/types';

const inititalState = {
    logged: false 
}

const init: () => IStateAuth = () => {
    return JSON.parse(localStorage.getItem('user') || 'null') || { logged: false };
}

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, inititalState, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};
