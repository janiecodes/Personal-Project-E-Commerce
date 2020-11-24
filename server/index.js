require('dotenv').config();
const express = require('express');
const massive = require('massive');
const userCtrl = require('./userController.js')
const productCtrl = require('./productController.js')
const cartCtrl = require('./cartController.js')
const session = require('express-session');
const {checkUser} = require('./middleware')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db);
    console.log('Yahoo! Connected to db!')
}).catch( err => console.log(err));

//ENDPOINTS - USER
app.post('/auth/register', userCtrl.registerUser)
app.post('/auth/login', userCtrl.loginUser)
app.post('/auth/logout', userCtrl.logoutUser)
app.get('/auth/register', checkUser, userCtrl.getUser)

//ENDPOINTS - PRODUCT
app.get('/products', productCtrl.getAllProducts)
app.get('/products/:id', productCtrl.getOneProduct)

//ENDPOINTS - CART
app.get('/cart/user', checkUser, cartCtrl.getCartByUser)
app.put('/cart/product/:id', checkUser, cartCtrl.editProductInCart)
app.post('/cart/product/:id', checkUser, cartCtrl.addProductToCart)
app.delete('/cart/product/:id', checkUser, cartCtrl.deleteProductInCart)

app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`))