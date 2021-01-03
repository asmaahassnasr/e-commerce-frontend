import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './User/Signup'
import Signin from './User/Signin'

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes ;