import { ADD_CUSTOMER, DELETE_CUSTOMER, DELETE_ALL_CUSTOMERS } from "../actions/customersAction"

const customersInitialState =  []

export const customersReducer = (state=customersInitialState, {type, payload}) =>{
    switch (type) {
        case ADD_CUSTOMER: {
            return [...state, {...payload}]
        }
        case DELETE_CUSTOMER: {
            return state.filter(cust=>{
                if(cust._id !== payload){
                    return cust
                }
            })
        }
        // case DELETE_ALL_CUSTOMERS:{
        //     return []
        // }
    
        default: return state
    }
}