import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/usersAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  menuButton: {
    //marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },

}));

const Header = (props)=> {
  const classes = useStyles();
  const token = useSelector(state=>state.token)
  const dispatch = useDispatch()   
  useEffect(()=>{
    if(token===''){
      props.history.push('/')
      localStorage.removeItem('token')
    }
  },[])
  const logout = () =>{
        dispatch(logoutUser(token))
        props.history.push('/')
    }
  
  const handleClick = (urlRoute) =>{
        props.history.push(urlRoute)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>{handleClick('/')}}>
            <HomeIcon />
          </IconButton>
            <Button onClick={()=>{handleClick('/')}} color="inherit">Home</Button>
          </Typography>
          { token ? 
                    (
                        <span>
                            <Button onClick={()=>{handleClick('/account')}} color="inherit">Account</Button>
                            <Button onClick={()=>{logout()}} color="inherit">Logout</Button>
                        </span>
                    ) : (
                        <span>
                            <Button onClick={()=>{handleClick('/register')}} color="inherit">Register</Button>
                            <Button onClick={()=>{handleClick('/login')}} color="inherit">Login</Button>
                        </span>
                    )
                }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)