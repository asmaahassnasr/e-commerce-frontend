
import {API} from '../config';

export const signup =(user) =>{

    // Send Data to backend as json using fetch
    return fetch(`${API}/signup`,{ 
        method:"POST",
        headers:{
            Accept:'application/json',
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
};

export const signin =(user) =>{

    // Send Data to backend as json using fetch
    return fetch(`${API}/signin`,{ 
        method:"POST",
        headers:{
            Accept:'application/json',
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
};

//Saving data to local storage
export const authenticate = (data,next) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next();
    }
}

export const signOut = (next) => {
    //Remove Token and user , request to backend , redirect user
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next();
        return fetch(`${API}/signout`,{
            method:'GET'
        })
        .then(respon => {
            console.log("signout",respon)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

//conditionally Show SignIn , SignOut
//Check if user is authenticated or not
export const isAuthenticated = () =>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    }
    else{
        return false;
    }
}