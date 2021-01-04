
import {API} from '../config';

export const createCategory =(userId,token,category) =>{

    // Send Data to backend as json using fetch
    return fetch(`${API}/category/create/${userId}`,{ 
        method:"POST",
        headers:{
            Accept:'application/json',
            "content-type":"application/json",
            Authorization: `Bearer ${token}` 
        },
        body:JSON.stringify(category)
    })
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
};


export const createProduct =(userId,token,product) =>{

    return fetch(`${API}/product/create/${userId}`,{ 
        method:"POST",
        headers:{
            Accept:'application/json',
            Authorization: `Bearer ${token}` 
        },
        body:product
    })
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
};


// To get all Categories 
export const getCategories = () =>{
    return fetch(`${API}/categories`, {
        method:"GET"
    }).then(response => { return response.json()})
    .catch( error => {console.log(error)});
}