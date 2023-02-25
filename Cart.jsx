import React, { useContext } from 'react'
import { products } from '../products';
import { ShopContext } from '../context/ShopContext';
import  {CartItem}  from './CartItem';
import "./cart.css"




export const Cart = () => {
  const{cartItems} = useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {products.map((Product, )=>{
          if(cartItems[Product.id] !== 0){
            return  <CartItem data={Product}/>

            
          }

        })}

      </div>
        
      
    </div>
  )
}

