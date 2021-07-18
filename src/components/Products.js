import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { asyncAddProduct, asyncDeleteProduct } from '../redux/actions/productsAction';
import ProductsTable from './ProductsTable';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
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

const Products = (props) => {
    const classes = useStyles()
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [searchProduct, setSearchProduct] = useState('');
    const dispatch = useDispatch()
    const token = useSelector(state=> state.token)
    const products = useSelector(state=>state.allProducts)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (parseInt(price)<=0){
        alert("Product price should be greater than zero")    
        }
        else{
            const productData = {
                name: name,
                price: price
            }
            console.log(productData)            
            dispatch(asyncAddProduct(productData, token))
            setName('')
            setPrice('')            
        }
            //         const productData = {
            //     name: name,
            //     price: price
            // }
            // console.log(productData)
            // dispatch(asyncAddProduct(productData, token))
            // setName('')
            // setPrice('')    
    }

    const filteredProducts = products.filter(prod=>{
        return prod.name.toLowerCase().includes(searchProduct.toLowerCase())
    })

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
            <div  className={classes.content}>
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit}> 
                <TextField
                    id="outlined-name"
                    label="Product name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required
                />
                <TextField
                    id="outlined-name"
                    label="price"
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
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
            {filteredProducts.length>0 && <input
                type='text'
                placeholder='search products'
                value={searchProduct}
                onChange={(e)=>{setSearchProduct(e.target.value)}}
            />}
             
            <ProductsTable products={filteredProducts} />
            </div>
        </div>
     );
}
 
export default Products;