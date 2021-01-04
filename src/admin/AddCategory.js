import React ,{useState} from "react";
import Layout from '../Core/Layout';
import {Link} from 'react-router-dom';
import {isAuthenticated} from '../auth/index';
import {createCategory} from './apiAdmin';

const AddCategory = () => {
    const [name,setName] = useState('');
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    
    //Destruct User and  token from localStorage
    const {user,token} = isAuthenticated();

    
    const handleChange =(e) => {
        setError('');
        setName(e.target.value);

    }


    const clickSubmin = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        // Make Request to API to create Category 
        createCategory(user._id,token,{name})
        .then( data => {
            if(data.error){
                setError(true);
            }
            else{
                setError('');
                setSuccess(true);
            }
        });
    }
    const newCategoryForm = () => (
        <form onSubmit={clickSubmin}> 
            <div className="form-group">
                <label className="text-muted"> Name </label>
                <input type="text" className="form-control"  required
                onChange={handleChange}  value={name} autoFocus/>
                </div>
                <div >
                <button className="btn btn-outline-primary">Create Category</button>
                </div>
        </form>
    )

    const showSuccess =() =>{
        if(success) {
              return <h3 className="text-success">{name} is Created </h3>  
        }
    }

    const showError=() =>{
        if(error) {
              return <h3 className="text-danger">Category Name Should be unique </h3>  
        }
    }

    const goBack=() =>{
        return (
            <div className="mt-5">
                <Link to="/admin/dashboard" className="text-warning"> Back To Dashboard</Link>
            </div>
        )
    }

    return (
        <Layout 
            title=' Create Category Page' className="container"
            description= {`Hello ${user.name} , ready to create new category ?`}
            >
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {showSuccess()}
                        {showError()}
                        {newCategoryForm()}
                        {goBack()}
                    </div>
                </div>
            </Layout>
    )
}

export default AddCategory;