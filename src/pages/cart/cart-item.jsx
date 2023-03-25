import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


    return (
        <div className='cartItem'> 
            <img src={productImage} alt="Product" />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p><b>₹{price}</b></p>
                <div className="countHandler">
                    {/* Also handles changes in quantity */}
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}