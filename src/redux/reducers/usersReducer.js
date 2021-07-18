import { ADD_USER, LOGIN_USER, ACCOUNT_INFO, LOGOUT_USER } from "../actions/usersAction"

const usersInitialState = []

const tokenInitialState = ""

export const usersReducer = (state = usersInitialState, {type, payload}) =>{
    switch (type) {
        case ADD_USER : {
            return [...state, {...payload}]
        }
        default: return state
            
    }
}

export const tokenReducer = (state=tokenInitialState, {type, payload})=>{
    switch(type){
        case LOGIN_USER :{
            return payload
        }
        case LOGOUT_USER :{
            return ""
        }
        default: return state
    }
}


