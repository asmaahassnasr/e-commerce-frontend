import React ,{useState,useEffect} from "react";
import Layout from '../Core/Layout';
import {Link} from 'react-router-dom';
import {isAuthenticated} from '../auth/index';
import {createProduct} from './apiAdmin';

const AddProduct =() =>{


    const {user,token} = isAuthenticated();

    return (
        <Layout 
            title=' Add New Product Page' className="container"
            description= {`Hello ${user.name} , ready to create new Product ?`}
            >
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        .....
                    </div>
                </div>
            </Layout>
    )

}
export default AddProduct;
