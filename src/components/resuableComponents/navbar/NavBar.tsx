import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { withRouter } from 'react-router';
import { checkIfLoggedIn, logoutClear } from '../../../utils/helper';

function NavBar(props:any) {
    const isLoggedIn = checkIfLoggedIn();

    const handleSignupRedirect = (page:string) => {
        if (page === 'signUp') props.history.push('/sign-up');
        else if (page === 'login') props.history.push('/login');
        else if (page === 'enterDetails') props.history.push('/your-details');
        else if (page === 'showDetails') props.history.push('/show-details');
    }

    const handleLogout = () => {
        logoutClear();
        handleSignupRedirect('login');
    }
    const checkPath = () => !window.location.pathname.includes('show-details')
    return (
        <React.Fragment>
             <div>
                <AppBar className="app-navbar" position="static">
                    <Toolbar>
                        <Typography variant="h6" className="navbar-title">
                            Data Collection
                        </Typography>
                        <Button color="inherit" onClick={() => handleSignupRedirect('enterDetails')}>Details</Button>
                        {!isLoggedIn && 
                            <>
                                <Button color="inherit" onClick={() => handleSignupRedirect('login')}>Login</Button>
                                <Button color="inherit" onClick={() => handleSignupRedirect('signUp')}>Sign Up</Button>
                            </>
                        }
                        {isLoggedIn ? 
                            <>
                                {checkPath() && <Button color="inherit" onClick={() => handleSignupRedirect('showDetails')}>All Users</Button>}
                                <Button color="inherit" onClick={handleLogout}>Logout</Button>
                            </>
                            :   ''
                        }
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default withRouter(NavBar);