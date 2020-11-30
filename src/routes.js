import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Auth from './Components/Auth'
import Registration from './Components/Registration'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Mac from './Components/Products/Mac'
import Ipad from './Components/Products/Ipad'
import Iphone from './Components/Products/Iphone'
import Watch from './Components/Products/Watch'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/auth' component={Auth}/> 
        <Route path='/registration' component={Registration}/>
        <Route path='/product' component={Product}/> 
        <Route path='/mac' component={Mac}/> 
        <Route path='/ipad' component={Ipad}/> 
        <Route path='/iphone' component={Iphone}/> 
        <Route path='/watch' component={Watch}/> 
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/> 
    </Switch>
)
