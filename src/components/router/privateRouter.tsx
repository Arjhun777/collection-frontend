import React from 'react';
import { Redirect } from 'react-router-dom';
import { checkIfLoggedIn } from '../../utils/helper';

function PrivateRoute({component: Component, ...props}:any) {
    
    return (
        <React.Fragment>
            {
                checkIfLoggedIn()
                ?   <Component {...props}></Component>
                :   <Redirect to="/login" {...props}></Redirect>
            }
        </React.Fragment>
    )
}

export default PrivateRoute;