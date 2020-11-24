import {Switch, Route, Link} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Auth from './Components/Auth'
import Registration from './Components/Registration'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/auth' component={Auth}/> 
        <Route path='/registration' component={Registration}/>
        <Route path='/product' component={Product}/> 
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/> 
    </Switch>
)
