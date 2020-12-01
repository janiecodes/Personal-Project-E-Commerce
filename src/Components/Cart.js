import {connect} from 'react-redux';
import { useEffect } from "react";
import {getCart} from '../redux/cartReducer'

const Cart = (props) => {

    useEffect(() => {
        props.getCart()
    }, [])


    return (
        <div className='cart-component'>
            <h1>Review your bag.</h1>
            <h4>Free delivery and free returns.</h4>
        
        
        
        
        
        
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {getCart})(Cart)