import axios from 'axios'

export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const GET_ALL_CUSTOMER = 'GET_ALL_CUSTOMER'
export const DELETE_ALL_CUSTOMERS = 'DELETE_ALL_CUSTOMERS' 

export const asyncAddCustomer = (custData, token) =>{
    
    return (dispatch)=>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }
        axios.post('http://dct-billing-app.herokuapp.com/api/customers',custData, config)
            .then(resp=>{
                const result = resp.data
                console.log(result)
                   if(result.hasOwnProperty('errors')){
                       alert(result.message)
                   }
                   else{
                       dispatch(addCustomer(result))
                   }
            })
            .catch(err=>{
                alert(err.message)
            })
    }
   }

export const addCustomer = (custData) =>{
    return {
        type: ADD_CUSTOMER,
        payload: custData
    }
}

export const asyncDeleteCustomer = (id, token) =>{
    let config = {
            headers: {
            'Authorization': 'Bearer ' + token
            }
         }
         return (dispatch)=>{
            axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, config )
         .then(resp=>{
             const result = resp.data
            if(result.hasOwnProperty('message')){
                alert(result.name) 
            }
            else{
                dispatch(deleteCustomer(id))
            }
         })
         .catch(err=>{
            alert(err.message)
         })
         }    
}

export const deleteCustomer = (id) =>{
    return{
        type: DELETE_CUSTOMER,
        payload: id
    }
}

// export const deleteAllCustomers = () =>{
//     return{
//         type: DELETE_ALL_CUSTOMERS
//     }
// }
