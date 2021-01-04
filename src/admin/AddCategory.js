import React ,{useState} from "react";
import Layout from '../Core/Layout';
import {Link} from 'react-router-dom';
import {isAuthenticated} from '../auth/index';

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
    }
    const newCategoryForm = () => (
        <form onSubmit={clickSubmin}> 
            <div className="form-group">
                <label className="text-muted"> Name </label>
                <input type="text" className="form-control" 
                onChange={handleChange}  value={name} autoFocus/>
                </div>
                <div >
                <button className="btn btn-outline-primary">Create Category</button>
                </div>
        </form>
    )

    return (
        <Layout 
            title=' Create Category Page' 
            description= {`Hello ${name} , ready to create new category ?`}
            >
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {newCategoryForm()}
                    </div>
                </div>
            </Layout>
    )
}

export default AddCategory;