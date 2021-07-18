import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { asyncLoginUser } from '../redux/actions/usersAction';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '250px',
        
        //height: '25px'
       
      },
    },
    centre:{
       paddingLeft: '500px'
    },
    button:{
        paddingLeft:'90px'
    }
  }))

const Login = (props) => { 
    const classes = useStyles()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    let errors = {}
    const dispatch = useDispatch()

    const runValidations = () =>{       
        // if(password.trim().length===0){
        //     errors.password = 'password cannot be empty'
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

    const handleSubmit = (e) =>{
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {     
                email: email,           
                password: password                           
            }
            console.log(formData)
            dispatch(asyncLoginUser(formData, props.history))
            setEmail('')
            setPassword('')
            //after no errors on axios login auth call redirect to dashboard
        }
        else{
            setFormErrors(errors)
        }
        
    }
    return ( 
        <div className={classes.centre}>   
            <h2>Already a member? Login here!</h2>
            <form className={classes.root} onSubmit={handleSubmit}>
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
                <div className={classes.button}>
                    <Button
                      type="submit"
                      label="Login"
                      variant="contained"
                      color="primary"
                      style= {{margin: 1}}
                    >Login</Button>
                </div>
                {/* {formErrors.password && <span>{formErrors.password}</span>} */}
                <br />
            </form>
        </div>
        
     );
}


export default Login;

