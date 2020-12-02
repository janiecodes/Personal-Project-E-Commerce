import {connect} from 'react-redux';
import {useEffect, useState} from "react";
import {getCart} from '../redux/cartReducer'


const Cart = (props) => {

  

    useEffect(() => {
        props.getCart()
    }, [props.cart.cart])

    // const [cart, setCart] = useState([])

    // const editCart = (product) => setCart((currentCart) => [...currentCart, product])
    // const removeFromCart = (product) => {
    //     setCart((currentCart) => {
    //         const indexOfItemToRemove = currentCart.findIndex((cartProduct))
    //     })
    // }
    const mappedCart = props.cart.cart.map((product, index) => {
        console.log(props.cart.cart)
        return (
        <div>
            <h1>{product.product_name}</h1> 
            <h2>{product.product_color}</h2>
            <h2>{product.quantity}</h2>
            <h2>{product.product_price}</h2>
            
        </div>
        )
    
    })

    // const total = mappedCart.reduce((a,b) => ({product.product_price: a.product.product_price + b.product.product_price}))

    return (
        <div className='cart-component'>
            <h1>Review your bag.</h1>
            <h4>Free delivery and free returns.</h4>
            <ul style={{listStyle:'none'}}>{mappedCart}</ul>
            Total 
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {getCart})(Cart)