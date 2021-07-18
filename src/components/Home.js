import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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

const Home = (props) => {
    const classes= useStyles()
    const tokenLS = localStorage.getItem('token')
    console.log(typeof tokenLS)
    return ( tokenLS ? (<div>
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
                            <ListItem button className={classes.hover} component={Link} to='/shop' >SHOP</
                            ListItem>
                            <ListItem button className={classes.hover} component={Link} to='/bills' >BILLS</ListItem> 
                        </List>
                    </Drawer>
                </div>
    <div className={classes.content}>
    <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        </div></div>

    ):(
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.</h2>
        </div>
    )
        
     );
}
 
export default Home;