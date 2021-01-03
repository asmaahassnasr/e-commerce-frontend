import React from 'react';
import Layout from '../Core/Layout';
import {isAuthenticated} from '../auth/index';
import { Link } from 'react-router-dom';

const UserDashBoard = () => {

    const {user:{_id,name,email,role}} = isAuthenticated();

    const userLinks = () =>{
        return (
            <div className="card mb-5">
                <h3 className="card-header"> User Links</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/cart" className="nav-link"> My Cart</Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/profile/update" className="nav-link"> Edit Profile</Link>
                    </li>
                </ul>
           </div>
        )
    }

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header"> User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role===1 ? 'Admin' : 'Registered User'}</li>
                </ul>
           </div>
        )
    }

    const purchaseHistory = () =>{
        return (
            <div className="card mb-5">
            <h3 className="card-header"> purchase History </h3>
            <ul className="list-group">
                <li className="list-group-item">name</li>
            </ul>
       </div>
        )
    }
    return (
        <Layout 
        title="User Dashboard"
        className="container"
        description={`G'day ${name}`}
        >
            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory()}
                </div>

            </div>
        
        </Layout>
    )
}

export default UserDashBoard;