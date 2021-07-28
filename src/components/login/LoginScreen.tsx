import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const LoginScreen = ({ history }: RouteComponentProps) => {
    const handleLogin = () => {
        // history.push('/');
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
