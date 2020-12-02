import {connect} from 'react-redux';
import {useEffect, useState} from "react";
import {getCart} from '../redux/cartReducer'
import axios from 'axios'
import CartItem from './CartItem'

const Cart = (props) => {

    // const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState([])
    // const [toggle, setToggle] = useState(false)
    const [cartTotal, setCartTotal] = useState(0)
    
    const total = () => {
        let totalVal = 0; 
        for (let i = 0; i < props.cart.cart.length; i ++){
            totalVal += props.cart.cart[i].product_price
        }
        setCartTotal(totalVal)
    }

    // function quantityDropdown(){
    //     setToggle(!toggle)
    // }

    const editQuantity = async (product_id, quantity) => {
            console.log(quantity)
            console.log(product_id)
        try {
            await axios.put(`/api/cart/product/${product_id}`, {quantity}
        )
        props.getCart()
        } catch(error){
            console.log(error)
        }
    }

    const deleteProduct = async (productId) => {
        try {
        const cart = await axios.delete(`/api/cart/product/${productId}`)
        setCart(cart.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        props.getCart()
        total()
    }, [props.cart.cart])

    const mappedCart = props.cart.cart.map((product) => {
        return <CartItem 
                // key={product.product_id} 
                product={product}
                deleteProduct={deleteProduct}
                editQuantity={editQuantity}
                />
    })

    // const mappedCart = props.cart.cart.map((product, index) => {
    //     return (
            
    //     <div className='cart-product-info'>
    
    //         <h1 key={product.product_name}>{product.product_name}</h1> 
    //         <h2>{product.product_color}</h2>
    //         <div className='quantity-dropdown'>
    //             <button onClick={quantityDropdown} className='dropdown-btn' type='button'>{product.quantity}</button>
    //             {toggle ? 
    //             <ul style={{listStyle:'none'}}>
    //             {[...Array(3).keys()].map(quantity => (
    //               <li className='edit-quantity-dropdown' key={`input: ${quantity}`}>
    //                 <input type="button" value={quantity + 1} onClick={() => editQuantity(product.product_id)} className="dropdown-item" />
    //               </li>
    //             ))}
    //             </ul>
    //             : null }
    //         </div>
            
            

    //         <h2>{product.product_price}</h2>
    //         <button onClick={() => deleteProduct(product.product_id)}>Remove</button>
    //     </div>
    //     )
    
    // })

    // const total = mappedCart.reduce((a,b) => ({product.product_price: a.product.product_price + b.product.product_price}))

    return (
        <div className='cart-component'>
            <h1>Review your bag.</h1>
            <h4>Free delivery and free returns.</h4>
            <ul style={{listStyle:'none'}}>{mappedCart}</ul>
            Total: {cartTotal} 
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {getCart})(Cart)



// {toggle ? 
//     <ul style={{listStyle:'none'}}>
//     {[...Array(3).keys()].map(quantity => (
//       <li className='edit-quantity-dropdown' key={`input: ${quantity}`}>
//         <input type="button" value={quantity + 1} onClick={() => editQuantity(product.product_id)} className="dropdown-item" />
//       </li>
//     ))}
//     </ul>
// : null }
