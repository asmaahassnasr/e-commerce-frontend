import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './User/Signup'
import Signin from './User/Signin'
import Home from './Core/Home'

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes ;