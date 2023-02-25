import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addTOCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

  return (
    <div>
      <img src={productImage} alt="" height="300px" width="300px"/>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>
            ${price}
        </p>
      </div>
      <button className='addToCart' onClick={()=> addTOCart(id)}>
        Add To Cart {cartItemAmount > 0  && <>({cartItemAmount})</>} 
      </button>
    </div>
  )
}

