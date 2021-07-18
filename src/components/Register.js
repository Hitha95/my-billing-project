import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import validator from 'validator'
import {useDispatch } from 'react-redux'
import { asyncAddUsers } from '../redux/actions/usersAction';
import { Link } from 'react-router-dom';
//import  '../css/Register.css'
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '250px',
        //height: '25px'
       
      },
    },
    centre:{
        paddingLeft: '38%',
    },
    button:{
        paddingLeft: '9%'
    },
    buttonReset:{
        paddingLeft: '11%',
        marginTop: '10px'
    }
  }))

const Register = (props) => {
    const classes = useStyles()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [address, setAddress] = useState('');
    const [formErrors, setFormErrors] = useState({});
    let errors = {}
    const dispatch = useDispatch()

    const runValidations = () =>{
        // if(username.trim().length===0){
        //     errors.name = 'name cannot be empty'
        //     console.log(errors)
        // }        
        // if(password.trim().length===0){
        //     errors.password = 'password cannot be empty'
        // }
        // if(businessName.trim().length===0){
        //     errors.businessName = 'businessName cannot be empty'
        // }
        // if(address.trim().length===0){
        //     errors.address = 'address cannot be empty'
        // }
        // if(email.trim().length===0){
        //     errors.email= 'email cannot be empty'
        //     console.log(errors)
        // }
        // else 
        if(!validator.isEmail(email)){
            errors.email = 'enter a valid email'
            console.log(errors)
        }
    }
    const handleReset = () =>{
            setUsername('')
            setEmail('')
            setPassword('')
            setBusinessName('')
            setAddress('')
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                username: username,
                email: email,
                password: password,
                businessName: businessName,
                address: address                            
            }
            //after no errors on axios register call redirect to login
            //console.log(formData)
            dispatch(asyncAddUsers(formData, props.history))
            // if(user){
            //     props.history.push('/login')
            // }
            //props.history.push('/login')

        }
        else{
            setFormErrors(errors)
        }
        
    }
    const loginlink = <Link to='/login' style={{textDecoration:'none'}}>here</Link>
    return ( 
        <div className={classes.centre}>
            <h2>New here? Sign up to Join us</h2>
            <span>Already a member? Then Click <i>{loginlink}</i> to Login</span>
            <form className={classes.root} onSubmit={handleSubmit}>
            
                <div>
                    <TextField
                    id="outlined-name"
                    label="Name"
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-name"
                    label="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-name"
                    label="password"
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required
                />
                </div>
                <div>
                    <TextField
                    id="outlined-name"
                    label="businessName"
                    value={businessName}
                    onChange={(e)=>{setBusinessName(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required
                />
                </div>
                <div>
                    <TextField
                    id="outlined-name"
                    label="address"
                    multiline
                    rows={4}
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required
                />
                </div>
                <div className={classes.button}>
                    <Button
                      
                      type="submit"
                      label="REGISTER"
                      variant="contained"
                      color="primary"
                    >Register</Button>
                </div>
                </form>          
             <div className={classes.buttonReset}>
             <Button                 
                label="RESET"
                onClick={handleReset}
                variant="contained"
                color="primary"
            >Reset</Button>                 
             </div>

        </div>
     );
}                
                
                
                
                
                {/* <input 
                    type='text'
                    placeholder = 'Enter username'
                    name='username'
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    required
                /> 
                {/* {formErrors.username && <span>{formErrors.username}</span>} 
                <br />
                <input 
                    type='text'
                    placeholder = 'Enter email'
                    name='email'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                />
                {formErrors.email && <span>{formErrors.email}</span>} 
                <br />
                <input 
                    type='password'
                    placeholder = 'Enter password'
                    name='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                />
                {formErrors.password && <span>{formErrors.password}</span>}
                <br />
                <input 
                    type='text'
                    placeholder = 'Enter businessName'
                    name='businessName'
                    value={businessName}
                    onChange={(e)=>{setBusinessName(e.target.value)}}
                />
              {formErrors.businessName && <span>{formErrors.businessName}</span>}
                <br />
                <textarea
                    placeholder = 'Enter address'
                    name='address'
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                />
               {formErrors.address && <span>{formErrors.address}</span>}
                <br />
                <input type='submit' value='Register' />*/}

 
export default Register;

{/* <input 
                    type='text'
                    placeholder = 'Enter username'
                    name='username'
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    required
                /> 
                {/* {formErrors.username && <span>{formErrors.username}</span>} 
                <br />
                <input 
                    type='text'
                    placeholder = 'Enter email'
                    name='email'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                />
                {formErrors.email && <span>{formErrors.email}</span>} 
                <br />
                <input 
                    type='password'
                    placeholder = 'Enter password'
                    name='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                />
                {formErrors.password && <span>{formErrors.password}</span>}
                <br />
                <input 
                    type='text'
                    placeholder = 'Enter businessName'
                    name='businessName'
                    value={businessName}
                    onChange={(e)=>{setBusinessName(e.target.value)}}
                />
              {formErrors.businessName && <span>{formErrors.businessName}</span>}
                <br />
                <textarea
                    placeholder = 'Enter address'
                    name='address'
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                />
               {formErrors.address && <span>{formErrors.address}</span>}
                <br />
                <input type='submit' value='Register' /> */}