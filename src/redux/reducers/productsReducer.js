import { ADD_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS } from "../actions/productsAction";

const productsInitialState = []

export const productsReducer = (state=productsInitialState, {type, payload}) =>{
    switch(type){
        case ADD_PRODUCT:{
            return[...state, {...payload}]
        }
        case DELETE_PRODUCT:{
            return state.filter(prod=>{
                if(prod._id !== payload){
                    return prod
                }
            })
        }       
        
        default: return state
    }
}

// export const allProductsReducer =(state=productsInitialState, {type, payload}) =>{
//     switch(type){
//         case GET_ALL_PRODUCTS: {
//             return [...payload]
//         }     
//     }
// }