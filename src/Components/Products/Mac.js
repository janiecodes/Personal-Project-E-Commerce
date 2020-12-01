
const Mac = (props) => {




    return (
        <div className='mac-component'>
            <h1>Which Mac notebook is right for you?</h1>
            <div className='mac-products'>
                <div className='first-mac'>
                    <img alt='Macbook' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1603332211000'/>
                    <h3>Macbook Air</h3>
                    <button>Buy</button>
                </div>
                <div className='second-mac'>
                    <img alt='Macbook' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1603406899000'/>
                    <h3>Macbook Pro 13''</h3>
                    <button>Buy</button>
                </div>
                <div className='third-mac'>
                    <img alt='Macbook' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572825197207'/>
                    <h3>Macbook Pro 16''</h3>
                    <button>Buy</button>
                </div>
            </div>


        </div>
    )
}

export default Mac;