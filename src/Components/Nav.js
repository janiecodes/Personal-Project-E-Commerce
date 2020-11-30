import {Link} from 'react-router-dom';
import {useState} from 'react'

const Nav = (props) => {

    const [toggle, setToggle] = useState(false)
    
    

    function cartDropdown(){
        setToggle(!toggle)
    }


    return (
        <div className='nav-component'>
            <a className='nav-links'>
                <Link className='dashboard-button' to='/'><img className='apple-logo' alt='Apple' src='data:image/png;base64,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' ></img></Link>

                <Link to={`/mac`}>Mac</Link>
                <Link to={`/ipad`}>iPad</Link>
                <Link to={`/iphone`}>iPhone</Link>
                <Link to={`/watch`}>Watch</Link>
                <Link to={`/`}>TV</Link>
                <Link to={`/`}>Music</Link>
                <Link to={`/`}>Support</Link>

                <Link className='search-button'>Search</Link>
                
                <div className='nav-cart-dropdown'>
                    <button onClick={cartDropdown} className='cart-dropdown'>Cart</button>
                    {toggle ?
                    <div className='dropdown-content'>
                        <Link to={`/checkout`}>Check Out</Link>
                        <Link to={`/cart`}>Bag</Link>
                        <Link to={`/`}>Favorites</Link>
                        <Link to={`/`}>Orders</Link>
                        <Link to={`/`}>Account</Link>
                        <Link to={`/auth`}>Sign in</Link>
                    </div>
                    : null }      
                </div>
                
                
            </a>
        
       </div>
    )
}

export default Nav;