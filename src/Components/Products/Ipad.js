import {useState} from 'react'
import axios from 'axios'

function Ipad(){

    const [productId, setId] = useRadioButtons('productId')

    const addItem = () => {
        axios   
            .post(`/api/cart/product/${productId}`)
            .then((res) => this.props.history.push(`/cart`))
            .catch(err => console.log(err))
    }

    return (
        <div className='ipad-component'>
            <div className='ipad-air'>
                <img alt='iPad Air' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-202009?wid=886&amp;hei=1070&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1599066777000'/>
                <div className='ipad-air-info'>
                    <h3>iPad Air</h3>
                    <h5>Finish</h5>
                    <form className='ipad-air-color'>
                        <label>
                        <input 
                        className='ipad-space-gray' 
                        name='productId' 
                        value={'1'} 
                        checked={productId === '1'}
                        {...setId}/>Space Gray    
                        </label>
                        <label>
                        <input
                        className='ipad-sky-blue'
                        name='productId'
                        value={'5'}
                        checked={productId === '5'}
                        {...setId}/>Sky Blue
                        </label>
                        <label>
                        <input
                        className='ipad-rose-gold'
                        name='productId'
                        value={'3'}
                        checked={productId === '3'}
                        {...setId}/>Rose Gold
                        </label>
                        <label>
                        <input
                        className='ipad-green'
                        name='productId'
                        value={'7'}
                        checked={productId === '7'}
                        {...setId}/>Green
                        </label>
                
                        <button onClick={addItem}>Add to Bag</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

function useRadioButtons(name) {
    const [value, setState] = useState(null)

    const handleChange = e => {
        setState(e.target.value)
    }

    const colorChoice = {
        name, 
        type: 'radio',
        onChange: handleChange
    }
    return [value, colorChoice]
}

export default Ipad;