import {useState, useEffect} from 'react';
import axios from 'axios';

const Dashboard = (props) => {

    //store products on Dashboard
    const {products ,setProducts} = useState ([]);
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



    return (
        <div>Dashboard</div>
    )
}

export default Dashboard