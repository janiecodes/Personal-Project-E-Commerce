
const Checkout = (props) => {





    return (
        <div className='checkout-component'>
            <header>
                <h3>Checkout</h3>
                <p>Show Order Summary: $5000</p>
            </header>

            <div className='checkout-delivery'>
                <h1>How would you like to get your order?</h1>
                <button>I'd like it delivered</button> <button>I'll pick it up</button>

            </div>
            
        </div>
    )
}

export default Checkout;