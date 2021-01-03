import React, {useState} from "react";
import Layout from '../Core/Layout';
import {Link,Redirect} from 'react-router-dom';
import {signup,isAuthenticated} from '../auth/index';

// put values of submit form in the state , when submit go to backend

const Signup = () => {

    const[values,setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    });

    const {name,email,password,error,success} = values;

    const handleChanges = (name) => (event) => {
        setValues({...values,error:false,[name]:event.target.value});
    }

    const clickSubmit= (event) =>{

        event.preventDefault()

        setValues({...values,error:false})

        signup({name,email,password})
        .then(data => {

            if(data.error){
                setValues({...values, error:data.error,success:false})
            }
            else{
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
            }
        })
    } 



    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input 
                type="text" 
                onChange={handleChanges('name')} 
                className="form-control" 
                value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input 
                type="email" 
                className="form-control"  
                onChange={handleChanges('email')} 
                value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input 
                type="password" 
                className="form-control"  
                onChange={handleChanges('password')} 
                value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary"> Submit </button>
        </form>
    )


    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' :"none"}}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' :"none"}}>
            Created Successfuly , please <Link to="/signin"> SignIn</Link>
        </div>
    )

    const redirectUser = () => {
        if(isAuthenticated()) {
            return <Redirect to="/"/>
        }
    }

    return (
            <Layout 
            title=' SignUp Page' 
            description="SignUp for our App"
            className="container col-md-8 offset-md-2"
            >
                {redirectUser()}
                {showSuccess()}
                {showError()}
               {signUpForm()}

               {/* To view live changes  */}
               {/* {JSON.stringify(values)} */}

            </Layout>
    )
}

export default Signup;