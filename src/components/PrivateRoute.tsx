import React from 'react'
import { Component } from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute:React.FC<RouteProps> = ({component, ...rest}) => {
        const {currentUser} = useAuth()
    
    return (
        <Route
        {...rest}
        render={props => {
              return  currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}
        >
            
        </Route>
    )
}

export default PrivateRoute;
