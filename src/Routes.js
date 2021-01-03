import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './User/Signup'
import Signin from './User/Signin'
import Home from './Core/Home'
import Menue from './Core/Menue'
const Routes = () =>{
    return (
        <BrowserRouter>
        <Menue />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes ;