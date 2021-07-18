import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { asyncAddCustomer,  } from '../redux/actions/customersAction';
import CustomersTable from './CustomersTable';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      //marginTop: '65px',
      width: drawerWidth,
      flexShrink: 0,
      
    },
    drawerPaper: {
      marginTop: '65px',
      width: drawerWidth,
      color: '#3f51b5',  
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      marginLeft: drawerWidth,
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));

const Customers = (props) => { 
    const classes = useStyles()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [searchCustomer, setSearchCustomer] = useState('');
    const [getAllCustomers, setGetAllCustomers] =useState([])
    //const customers = useSelector(state => state.allCustomers)
    const [token, setToken] = useState('');
    const dispatch = useDispatch()

    useEffect(()=>{
       const result = localStorage.getItem('token')
       setToken(result)
    })

    useEffect(()=>{
        let config = {
            headers: {
            'Authorization': 'Bearer ' + token
            }
         }
        axios.get('http://dct-billing-app.herokuapp.com/api/customers', config )
         .then(resp=>{
             const result = resp.data
             if(result==="invalid token"){
                alert(result)
             }
             else{
                setGetAllCustomers(result)
             }
         })
         .catch(err=>{
            alert(err.message)
         })
    },[getAllCustomers])

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(mobile.length !== 10){
            alert("Please check your mobile number")
        }
        else{
        const customerData = {
            name: name,
            mobile: mobile,
            email: email
        }
       
        setName('')
        setEmail('')
        setMobile('')
    }}
    const filteredCustomers = getAllCustomers.filter(cust=>{
        return cust.name.toLowerCase().includes(searchCustomer.toLowerCase())
    })
    const deleteData = () =>{
        const confirmed = window.confirm('Are you sure?')
        if(confirmed){
            //dispatch(deleteAllCustomers())
            alert("hello")
        }
    }
    return ( 
        <div>
            <div className={classes.root}>
        <CssBaseline />
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"        
        >        
        <List>
            <ListItem button className={classes.hover} component={Link} to='/dashboard' >DASHBOARD</ListItem>      
            <ListItem button className={classes.hover} component={Link} to='/customers' >CUSTOMERS</ListItem> 
            <ListItem button className={classes.hover} component={Link} to='/products' >PRODUCTS</ListItem> 
            <ListItem button className={classes.hover} component={Link} to='/shop' >SHOP</ListItem>
            <ListItem button className={classes.hover} component={Link} to='/bills' >BILLS</ListItem> 
        </List>
        </Drawer>
    </div>
    <div className={classes.content}>
            <h2>Add customers</h2>
            <form onSubmit={handleSubmit}>
            <TextField
                id="outlined-name"
                label="Customer name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                variant="outlined"
                size="small"
                required
            />
            <TextField
                id="outlined-name"
                label="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                variant="outlined"
                size="small"
            />
            <TextField
                id="outlined-name"
                label="mobile"
                value={mobile}
                onChange={(e)=>{setMobile(e.target.value)}}
                variant="outlined"
                size="small"
                required
            />                
            <Button
                type="submit"
                label="add"
                variant="contained"
                color="primary"
                style= {{margin: 1}}
            >add</Button> 
            </form><br />
            {filteredCustomers.length>0 && 
            <div>
                <input 
                    type='text'
                    placeholder='search customer'
                    value={searchCustomer}
                    onChange={(e)=>setSearchCustomer(e.target.value)}
                    style={{float:'left !important'}}
                />                
            <CustomersTable customers={filteredCustomers} />   
            <Button
                variant="contained"
                label="deleteAll"
                color="secondary"
                style={{float:'right', marginBottom:'15px', marginRight:'65px'}}
                onClick={deleteData}
            >delete all</Button> 
            </div>}
        </div>
    </div>
     );
}
//#f50057
export default Customers;

{/* <TextField
                id="outlined-name"
                label="search customer"
                value={searchCustomer}
                onChange={(e)=>{setSearchCustomer(e.target.value)}}
                variant="outlined"
                size="small"
            /> */}