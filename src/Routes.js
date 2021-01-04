import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './User/Signup';
import Signin from './User/Signin';
import Home from './Core/Home';
import PrivateRoutes from './auth/privateRoute';
import UserDashBoard from './User/UserDashBoard';
import AdminPrivateRoutes from './auth/AdminPrivateRout';
import AdminDashBoard from './User/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <PrivateRoutes exact path="/user/dashboard" component={UserDashBoard} />
                <AdminPrivateRoutes exact path="/admin/dashboard" component={AdminDashBoard} />
                <AdminPrivateRoutes exact path="/create/category" component={AddCategory} />
                <AdminPrivateRoutes exact path="/create/product" component={AddProduct} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes ;