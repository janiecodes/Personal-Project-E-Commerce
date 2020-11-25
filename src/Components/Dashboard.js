import {useState, useEffect} from 'react';
import axios from 'axios';
import DashProduct from './DashProduct'
import {connect} from 'react-redux'

const Dashboard = (props) => {

    //store products on Dashboard
    const [products ,setProducts] = useState ([]);
    //axios request to our backend to get all the products
    //componentDidMount not allowed in a Functional Component so we use useEffect
    useEffect(() => {
       axios
        .get('/products')
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => console.log(err));
    }, []);

    const mappedProducts = products.map((product) => {
        return <DashProduct key={products.product_id} product={product}/>
    })


    return (
        <div>
            <h1>Dashboard</h1>
            <ul style={{listStyle: 'none'}}>{mappedProducts}</ul> 
        </div>
    )
}

export default connect( (reduxState) => reduxState) (Dashboard)