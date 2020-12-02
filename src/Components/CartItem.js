
import {useState} from "react";

const CartItem = ({product: {product_name, product_color, product_id, product_price}, quantity, deleteProduct, editQuantity}) => {

  const [toggle, setToggle] = useState(false)
  const [num, setQuantity] = useState('1')
//   function quantityDropdown(){
//         setToggle(!toggle)
//     }

  return (
    <div className="cart-product-info">
      <h1>{product_name}</h1>
      <h2>{product_color}</h2>
      <div className="quantity-dropdown">
        <div
          onClick={() => {setToggle(!toggle)}}
          className="dropdown-btn"
          type="button"
        >
          {`${num}`}
        </div>
        {toggle ? (
          <ul style={{ listStyle: "none" }}>
            {[...Array(3).keys()].map((quantity) => (
              <li className="edit-quantity-dropdown" key={`input: ${quantity}`}>
                <input
                  type="button"
                  value={quantity + 1}
                  onClick={() => {editQuantity(product_id, quantity + 1)
                 setQuantity(quantity + 1)  
                }}
                  className="dropdown-item"
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <h2>{product_price}</h2>
      <button onClick={() => deleteProduct(product_id)}>Remove</button>
    </div>
  );
};
export default (CartItem)