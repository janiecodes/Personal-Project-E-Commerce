
const Ipad = (props) => {



    return (
        <div className='ipad-component'>
            <div className='ipad-air'>
                <img alt='iPad Air' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-202009?wid=886&amp;hei=1070&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1599066777000'/>
                <div className='ipad-air-info'>
                    <h3>iPad Air</h3>
                    <h5>Finish</h5>
                    <div className='ipad-air-color'>
                        <button>Space Gray</button>
                        <button>Silver</button>
                        <button>Rose Gold</button>
                        <button>Green</button>
                    </div>
                    <h5>Storage</h5>
                    <div className='ipad-air-storage'>
                        <button>64GB</button>
                        <button>256GB</button>
                    </div>
                </div>
                <button>Add to Bag</button>
            </div>



        </div>
    )
}

export default Ipad;