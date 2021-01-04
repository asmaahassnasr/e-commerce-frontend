import React ,{useState,useEffect} from "react";
import Layout from '../Core/Layout';
import {Link} from 'react-router-dom';
import {isAuthenticated} from '../auth/index';
import {createProduct} from './apiAdmin';

const AddProduct =() =>{

    const [values,setValues] = useState({
        name:'',
        description:'',
        price:'',
        categories:[],
        category:'',
        shipping:'',
        quantity:'',
        photo:'',
        loading:false,
        error:'',
        createdProduct:'',
        redirectToProfile:false,
        formData:''
    })

    const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData} = values;


    const {user,token} = isAuthenticated();

    useEffect ( () => {
        setValues({...values,formData:new FormData()})
    },[])
    const handleChange =(name) => (event) => {

        const value = name === 'photo' ?
         event.target.files[0]
        : event.target.value;

        formData.set(name,value);

        setValues({...values,[name]:value});

        //send Data To Backend as form data not json

    }

    const newPostForm = () => (
        <form className="mb-3">
            <h4> Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                <input type="file" name="photo" 
                onChange={handleChange ('photo')}
                accept="image/*"/>
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted"> Name </label>
                <input type="text" className="form-control"
                value={name} onChange={handleChange ('name')}/>
            </div>
            <div className="form-group">
                <label className="text-muted"> Description </label>
                <textarea className="form-control"
                value={description} onChange={handleChange ('description')}/>
            </div>
            <div className="form-group">
                <label className="text-muted"> Price </label>
                <input type="number" className="form-control"
                value={price} onChange={handleChange ('price')}/>
            </div>
            <div className="form-group">
                <label className="text-muted"> Category </label>
                <select className="form-control" onChange={handleChange ('category')}>
                <option value="5ff31f69dd7a0a2bac500cbd"> Node3 </option>
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted"> Quantity </label>
                <input type="number" className="form-control"
                value={quantity} onChange={handleChange ('quantity')}/>
            </div>
            <div className="form-group">
                <label className="text-muted"> Shipping </label>
                <select className="form-control" onChange={handleChange ('shipping')}>
                <option value="0"> No </option>
                <option value="1"> Yes </option>
                </select>
            </div>
            <div>
                <button className="btn btn-prmary">Create Product </button>
            </div>
        </form>
    )

    return (
        <Layout 
            title=' Add New Product Page' className="container"
            description= {`Hello ${user.name} , ready to create new Product ?`}
            >
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                       {newPostForm()}
                    </div>
                </div>
            </Layout>
    )

}
export default AddProduct;
