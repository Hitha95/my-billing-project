import axios from 'axios'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

export const asyncAddProduct = (prodDetails, token) =>{
    let config={
        headers:{
            'Authorization' : 'Bearer ' + token
        }
    }
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/products', prodDetails, config)
            .then(resp=>{
                const result = resp.data
                //console.log(result)
                if(result==="invalid token"){
                    alert(result)
                }
                else{
                    dispatch(addProduct(result))
                }
            })
            .catch(err=>{
                console.log(err.message)
            })
    }
} 

export const addProduct = (prodDetails) =>{
    return{
        type: ADD_PRODUCT,
        payload: prodDetails
    }
}

export const asyncDeleteProduct = (id, token) =>{
    return (dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
            headers:{
                'Authorization' : 'Bearer ' + token
            }
        })
            .then(resp=>{
                const result= resp.data
                if(result.hasOwnProperty('message')){
                    alert(result.message)
                }
                else{
                    dispatch(deleteProduct(id))
                }
            })
            .catch(err=>{
                alert(err)
            })
    }
} 

export const deleteProduct = (id) =>{
    return{
        type: DELETE_PRODUCT,
        payload: id
    }
}

export const asyncGetAllProducts = (token) =>{
    let config={
        headers:{
            'Authorization' : 'Bearer ' + token
        }
    }
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products',config)
            .then(resp=>{
                const result = resp.data
                //console.log(result)
                if(result==="invalid token"){
                    alert(result)
                }
                else{
                    alert('allprods')
                   //dispatch(getAllProducts(result))
                }
            })
            .catch(err=>{
                console.log(err.message)
            })
    }
} 

export const getAllProducts = (data) =>{
    return{
        type: GET_ALL_PRODUCTS,
        payload: data
    }
}
