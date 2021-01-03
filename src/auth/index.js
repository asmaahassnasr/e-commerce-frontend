
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