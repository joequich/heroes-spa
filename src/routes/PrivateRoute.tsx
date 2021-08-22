import React from 'react'
import { Location } from 'history';
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

interface PrivateRouteProps {
    isAuthenticated: boolean;
    component: React.ElementType;
    path: string;
    location?: Location
};

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PrivateRouteProps) => {
    localStorage.setItem('lastPath', rest!.location!.pathname)
    return (
        <Route {...rest}
            render={ (props) => (
                (isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )
            }
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
