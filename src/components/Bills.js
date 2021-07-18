import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
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
const Bills = (props) => {
    const classes = useStyles()
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
            {/* render bills in another div*/}
            <div  className={classes.content}>
                <h2>You'll find your bills here!</h2>
            </div>
        </div> 
     );
}
 
export default Bills;