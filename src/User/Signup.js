import React, {useState} from "react";
import Layout from '../Core/Layout'
import {API} from '../config'


// put values of submit form in the state , when submit go to backend

const Signup = () => {

    const[values,setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    });

    const handleChanges = (name) => (event) => {
        setValues({...values,error:false,[name]:event.target.value});
    }
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" onChange={handleChanges('name')} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" className="form-control"  onChange={handleChanges('email')} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" className="form-control"  onChange={handleChanges('password')} />
            </div>
            <button className="btn btn-primary"> Submit </button>
        </form>
    )

    return (
            <Layout 
            title=' SignUp Page' 
            description="SignUp for our App"
            className="container col-md-8 offset-md-2"
            >
               {signUpForm()}
               {/* To view live changes  */}
               {/* {JSON.stringify(values)} */}
            </Layout>
    )
}

export default Signup;