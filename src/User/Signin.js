import React ,{useState} from "react";
import Layout from '../Core/Layout';
import {Redirect} from 'react-router-dom';
import {signin,authenticate,isAuthenticated} from '../auth/index';

const Signin = () => {
  
    const[values,setValues] = useState({
        email:'admin@gmail.com',
        password:'1234abcd',
        error:'',
        loading:false,
        redirecToRefrrer:false
    });

    const {email,password,error,loading,redirecToRefrrer} = values;
    const {user} = isAuthenticated();

    const handleChanges = (name) => (event) => {
        setValues({...values,error:false,[name]:event.target.value});
    }

    const clickSubmit= (event) =>{

        event.preventDefault()

        setValues({...values,error:false,loading:true})

        signin({email,password})
        .then(data => {

            if(data.error){
                setValues({...values, error:data.error,loading:false})
            }
            else{
                
                authenticate(data, () => {
                        setValues({
                                    ...values,
                                    redirecToRefrrer:true
                                });
                })
             }
        })
    } 



    const signInForm = () => (
        <form>
           
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

    const showloading = () => 
    loading && (
           <div className="alert alert-info"> 
               <h2> Loading ..</h2>
           </div>
       );
    
        const redirectUser = () => {
            if(redirecToRefrrer) {
                if(user && user.role===1){
                     return <Redirect to="/admin/dashboard" />
                }else if(user && user.role===0){
                    return <Redirect to="/user/dashboard"/>
                }
            }
            if(isAuthenticated()) {
                return <Redirect to="/"/>
            }
        }
    return (
            <Layout 
            title=' SignIn Page' 
            description="SignIn for our App"
            className="container col-md-8 offset-md-2"
            >
                {showloading()}
                {showError()}
               {signInForm()}
                {redirectUser()}
            </Layout>
    )
}

export default Signin;