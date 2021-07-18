import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
//import { asyncAccountInfo } from '../redux/actions/usersAction';

const Account = (props) => {  
    const [accountInfo, setAccountInfo] = useState({});
    const dispatch = useDispatch() 
    const token = useSelector(state=> state.token) 
    useEffect(()=>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }
          axios.get('http://dct-billing-app.herokuapp.com/api/users/account', config)
          .then(resp=>{
              const accountInfo = resp.data      
              setAccountInfo(accountInfo)
          })
          .catch(err=>{
              alert(err.message)
          })
    }, [])
    
    //dispatch(asyncAccountInfo(token))
    return ( 
        <div> {accountInfo.username && 
            <div>
                <h2>Username: {accountInfo.username}</h2>
                <h2>Email: {accountInfo.email}</h2>
                <h2>Business Name: {accountInfo.businessName}</h2>
                <h2>Address: {accountInfo.address}</h2>
            </div>}

        </div>
     );
}
 
export default Account;