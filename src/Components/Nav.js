import {Link} from 'react-router-dom';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons'


library.add(faApple, faSearch, faShoppingBag)

const Nav = (props) => {

    const [toggle, setToggle] = useState(false)
    

    function cartDropdown(){
        setToggle(!toggle)
    }


    return (
        <div className='nav-component'>
  
                <Link className='dashboard-button' to='/'><FontAwesomeIcon icon={['fab', 'apple']} size="lg"/></Link>
                {/* <img className='apple-logo' alt='Apple' src={`/assets/apple-logo.png`}/> */}
                
                <Link to={`/mac`}>Mac</Link>
                <Link to={`/ipad`}>iPad</Link>
                <Link to={`/iphone`}>iPhone</Link>
                <Link to={`/watch`}>Watch</Link>
                <Link to={`/`}>TV</Link>
                <Link to={`/`}>Music</Link>
                <Link to={`/`}>Support</Link>
            

                <Link className='search-button'><FontAwesomeIcon icon="search" size="lg"/></Link>

                <div className='nav-cart-dropdown'>
                    <button onClick={cartDropdown} className='cart-dropdown'><FontAwesomeIcon icon="shopping-bag" size="lg"/></button>
                    {toggle ?
                    <div className='dropdown-content'>
                        <Link className='dropdown-link' to={`/checkout`}>Check Out</Link>
                        <Link className='dropdown-link' to={`/cart`}>Bag</Link>
                        <Link className='dropdown-link' to={`/`}>Favorites</Link>
                        <Link className='dropdown-link' to={`/`}>Orders</Link>
                        <Link className='dropdown-link' to={`/`}>Account</Link>
                        <Link className='dropdown-link' to={`/auth`}>Sign in</Link>
                    </div>
                    : null }      
                </div>

       </div>
    )
}

export default Nav;