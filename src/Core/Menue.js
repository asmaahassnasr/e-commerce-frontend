import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signOut,isAuthenticated} from '../auth/index';

const isActive = (history,path) => {
    if(history.location.pathname === path) {
        return {color: '#ff9900'}
    }
    else {
        return {color:'#fff'}
    }
}

const Menue = ({history}) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">

                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history,'/')} to="/">Home</Link>
                </li>

                {!isAuthenticated() && (
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history,'/signin')} to="/signin">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history,'/signup')} to="/signup">Sign Up</Link>
                    </li>
                  </>
                )}

                {isAuthenticated() && (
                    <>
                     <li className="nav-item">
                    <Link className="nav-link" style={isActive(history,'/')} to="/dashboard">DashBoard</Link>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" 
                           style={{color:"#fff", cursor:'pointer'}}
                           onClick={() => signOut( () => {
                               history.push("/")
                           })}>
                            Sign out
                        </span>
                    </li>
                    </>
                )}

            </ul>
        </div>
    )
}

export default withRouter(Menue);