import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import PropTypes from 'prop-types';

interface PublicRouteProps {
    isAuthenticated: boolean;
    component: React.ElementType;
    path: string;
    exact: boolean;
};

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PublicRouteProps) => {
    return (
        <Route {...rest}
            render={ (props) => (
                (!isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to="/" />
            )
            }
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
