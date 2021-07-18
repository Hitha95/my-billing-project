import React, { useState } from 'react';
import { Button, Paper, TableCell, TableHead, TableRow, TableSortLabel, Table, TableBody, TablePagination, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { asyncDeleteProduct } from '../redux/actions/productsAction';
import { getComparator,  sortedRowInformation} from './helperFunctions'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '250px',            
      },
    },
    table:{
        maxWidth: '85%',
        marginLeft: '5%'
    }
  }))

const ProductsTable = (props) => {
    const classes = useStyles()
    const rowInformation = props.products
    const token = useSelector(state=>state.token)
    const dispatch = useDispatch()
    const deleteProduct = (id) =>{        
        const confirm = window.confirm('Are you sure?')
        if(confirm){
            dispatch(asyncDeleteProduct(id, token))
        }
    }

    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = useState('name')
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)  
    
    const createSortHandler = (property) =>(event) =>{
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }
    const handleChangePage = (e, newPage) =>{
        setPage(newPage)
    }
    const handleChangeRowsPerPage =(e) =>{
        setRowsPerPage(parseInt(e.target.value), 10)
        setPage(0)
    }
    return ( 
        <div style={{paddingLeft:'10px'}}>
            {
                rowInformation.length === 0 ? (
                <div>
                    <br/>
                    <span>No products here...Add now!</span>
                </div>) : (
                <div>
                    <TableContainer component={Paper} className={classes.table}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell key="id">    
                                        ID
                                    </TableCell>

                                    <TableCell key="name">
                                        <TableSortLabel
                                            active={valueToOrderBy==="name"}
                                            direction={valueToOrderBy==="name" ? orderDirection : 'asc' }
                                            onClick={createSortHandler("name")}
                                        >
                                            Name
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell key="price">
                                        <TableSortLabel
                                            active={valueToOrderBy==="price"}
                                            direction={valueToOrderBy==="price" ? orderDirection : 'asc' }
                                            onClick={createSortHandler("price")}
                                        >
                                            price
                                        </TableSortLabel>
                                    </TableCell>                        
                                    <TableCell key="createdAt">
                                        Created At
                                    </TableCell>
                                    <TableCell key="action">
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    sortedRowInformation(rowInformation, getComparator(orderDirection, valueToOrderBy))
                                    .slice(page* rowsPerPage, page*rowsPerPage + rowsPerPage)
                                    .map((prod, i)=>(
                                        <TableRow key={prod._id}>
                                            <TableCell>
                                                {i+1}
                                            </TableCell>
                                            <TableCell>
                                                {prod.name}
                                            </TableCell>
                                            <TableCell>
                                                {prod.price}
                                            </TableCell>
                                            <TableCell>
                                                {prod.createdAt}
                                            </TableCell>
                                            <TableCell>
                                                <Button 
                                                    size="small"
                                                    fontSize="small"
                                                    variant="contained"
                                                    color="primary"
                                                    //onClick={()=>{deleteCustomer(cust._id)}}
                                                >edit</Button>
                                                <Button 
                                                    size="small"
                                                    fontSize="small"
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={()=>{deleteProduct(prod._id)}}
                                                >delete</Button>
                                                {/* <button onClick={()=>{deleteCustomer(prod._id)}}>delete</button> */}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                } 
                            </TableBody>
                        </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions = {[5, 10, 15]}
            component="div"
            count={rowInformation.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange ={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
                    </div>
                )
            }
        
        </div>
     );
}
 
export default ProductsTable;