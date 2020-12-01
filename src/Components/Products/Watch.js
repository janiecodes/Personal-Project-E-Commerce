
const Watch = (props) => {




    return (
        <div className='watch-component'>
            <h1>Which Apple Watch is right for you?</h1>
            <div className='watch-products'>
                <div className='first-watch'>
                    <img alt='Apple Watch' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-compare-s6-202009?wid=454&hei=546&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1600817762000'/>
                    <h4>Apple Watch</h4>
                    <h4>Series 6</h4>
                    <h6> From $399</h6>
                    <button>Buy</button>
                </div>
                <div className='second-watch'>
                    <img alt='Apple Watch' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-compare-se-202009_GEO_US?wid=448&hei=546&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604718663000'/>
                    <h4>SE</h4>
                    <h6> From $279</h6>
                    <button>Buy</button>
                </div>
                <div className='third-watch'>
                    <img alt='Apple Watch' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-compare-s3-202009?wid=440&hei=546&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1600310839000'/>
                    <h4>Apple Watch</h4>
                    <h4>Series 3</h4>
                    <h6> From $199</h6>
                    <button>Buy</button>
                </div>

            </div>

        </div>
    )
}

export default Watch;