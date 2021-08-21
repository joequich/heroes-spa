import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { EAuthReducer } from '../../types/types';

export const LoginScreen = ({ history }: RouteComponentProps) => {
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        dispatch({
            type: EAuthReducer.login,
            payload: {
                name: 'Joseph'
            }
        });
        
        history.replace('/');
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin}>
                Log On
            </button>
        </div>
    );
};
