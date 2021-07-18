import axios from 'axios'

export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const ACCOUNT_INFO = 'ACCOUNT_INFO'
export const LOGOUT_USER = 'LOGOUT_USER'

export const asyncAddUsers = (userData, history) =>{
    return (dispatch) =>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', userData)
            .then(resp=>{
              console.log(resp.data)
              if(resp.data.hasOwnProperty('errmsg')){
                  alert(resp.data.errmsg)
              }
              else{
                  console.log(resp.data)
                  dispatch(addUser(resp.data))   
                  alert('Registration Successful')
                  history.push('/login')               
              }
            })
            .catch(err=>{
                console.log(err.message)
            })
    }
}

export const addUser = (userData) =>{
    return{
        type: ADD_USER,
        payload: userData
    }
}

export const asyncLoginUser = (loginData, history) =>{
 return (dispatch)=>{
     axios.post('http://dct-billing-app.herokuapp.com/api/users/login', loginData)
        .then(resp=>{
            const token = resp.data            
            if(token.hasOwnProperty('errors')){
                alert(token.errors)
            }
            else if(token.hasOwnProperty('token')){             
               dispatch(loginUser(token.token))
               localStorage.setItem('token', token.token)
               history.push('/dashboard')
            }
        })
        .catch(err=>{
            alert(err.message)
        })
 }
}
   
export const loginUser = (token)  =>{
    return{
        type: LOGIN_USER,
        payload: token
    }
}

export const accountInfo = (accountInfo)  =>{
    return{
        type: ACCOUNT_INFO,
        payload: accountInfo
    }
}

export const logoutUser = (token)  =>{
    return{
        type: LOGOUT_USER,
        payload: token
    }
}


