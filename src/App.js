import React from 'react'
import { Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import Customers from './components/Customers'
import Products from './components/Products'
import Bills from './components/Bills'
import Account from './components/Account'
import Header from './components/Header'
import { Shop } from '@material-ui/icons';
//import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

}))   
const App = (props) => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            
            <Header />
            
            <Route path='/' exact={true} component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/account' component={Account} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/customers' exact={true} component={Customers} />
            <Route path='/products' exact={true} component={Products} />
            <Route path='/bills' exact={true} component={Bills} />
            <Route path='/shop' exact={true} component={Shop} />
            {/* <Route path='/customers/:customerId' component={} />
            <Route path='/products/:productId' component={} />
            <Route path='/bills/:billId' component={} /> */}
                           
        </div>
     );
}
 
export default App;
// { token ? 
//     (
//         <div>  
//             <li><Link to='/account'>Account</Link></li>
//             <li><Link onClick={()=>logout()}>Logout</Link></li>                        
//         </div>
//     ) : (
//         <div>
//             <li><Link to='/register'>Register</Link></li>
//             <li><Link to='login'>Login</Link></li>
//         </div>
//     )
// }