import React from 'react';
import Layout from '../Core/Layout';
import {isAuthenticated} from '../auth/index';

const UserDashBoard = () => {

    const {user:{_id,name,email,role}} = isAuthenticated();
    return (
        <Layout 
        title="User Dashboard"
        className="container"
        description="User Dashboard"
        >
            <div className="card mb-5">
                <h3 className="card-header"> User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role===1 ? 'Admin' : 'Registered User'}</li>
                </ul>
           </div>

           <div className="card mb-5">
                <h3 className="card-header"> purchase History </h3>
                <ul className="list-group">
                    <li className="list-group-item">name</li>
                </ul>
           </div>
        
        </Layout>
    )
}

export default UserDashBoard;