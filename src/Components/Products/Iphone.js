import axios from 'axios'

const Iphone = (props) => {

    const addItem = () => {
        axios   
            .post(`/api/cart/product/${props.productId}`)
            .then((res) => this.props.history.push(`/cart`))
            .catch(err => console.log(err))
    }


    return (
        <div className='iphone-component'>
            <div className='dashboard-ad'>
                <h5>iPhone 12</h5>
                <h1>Blast past fast.</h1>
                <p>From $29.12/mo. or $699 before trade-in</p>
                <button>Buy</button>
                <p>Learn more ></p>
                <img alt='iPhone' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4EOO_MBB7DQeM88KdTEWz6IHQQLr8AUrA&usqp=CAU'/>
            </div>
            <div className='iphone-products'>
                <h1>Which iPhone is right for you?</h1>
                <div className='iphone-products'>
                    <div className='first-iphone'>
                        <img alt='iPhone 12 Pro' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1604021663000'/>
                        <h3>iPhone 12 Pro</h3>
                        <h6>Starting at $999</h6>
                        <h6>Super Retina XDR display</h6>
                        <h6>5G cellular</h6>
                        <h6>A14 Bionic chip</h6>
                        <h6>Pro camera system</h6>
                        <h6>LiDAR Scanner for Night mode portaits</h6>
                        <h6>Compatible with MagSafe accessories</h6>
                        <button onClick={addItem} value={'15'}>Buy</button>
                    </div>
                    <div className='second-iphone'>
                        <img alt='iPhone 12'src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343704000'/>
                        <h3>iPhone 12</h3>
                        <h6>Starting at $699</h6>
                        <h6>Super Retina XDR display</h6>
                        <h6>5G cellular</h6>
                        <h6>A14 Bionic chip</h6>
                        <h6>Pro camera system</h6>
                        <h6>LiDAR Scanner for Night mode portaits</h6>
                        <h6>Compatible with MagSafe accessories</h6>
                        <button onClick={addItem} value={'16'}>Buy</button>
                    </div>

                    <div className='third-iphone'>
                        <img alt='iPhone 11'src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782'/>
                        <h3>iPhone 11</h3>
                        <h6>Starting at $999</h6>
                        <h6>Super Retina XDR display</h6>
                        <h6>5G cellular</h6>
                        <h6>A14 Bionic chip</h6>
                        <h6>Pro camera system</h6>
                        <h6>LiDAR Scanner for Night mode portaits</h6>
                        <h6>Compatible with MagSafe accessories</h6>
                        <button onClick={addItem} value={'17'}>Buy</button>
                    </div>
                    <div className='fourth-iphone'>
                        <img alt='iPhone SE'src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1586574260051'/>
                        <h3>iPhone SE</h3>
                        <h6>Starting at $449</h6>
                        <h6>Super Retina XDR display</h6>
                        <h6>5G cellular</h6>
                        <h6>A14 Bionic chip</h6>
                        <h6>Pro camera system</h6>
                        <h6>LiDAR Scanner for Night mode portaits</h6>
                        <h6>Compatible with MagSafe accessories</h6>
                        <button onClick={addItem} value={'18'}>Buy</button>
                    </div>
                </div>
            </div>
 

        </div>
    )
}

export default Iphone;