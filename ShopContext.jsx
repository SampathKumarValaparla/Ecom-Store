import React, { createContext, useState } from 'react'
import  {products}  from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {}
  for(let i=1;i<products.length;i++){
    cart[i] = 0
  }
  return cart;
}


export const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
  };

  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
  };

  const updateCartItemCount = (newAmount, itemId) =>{
    setCartItems((prev) =>({...prev, [itemId]:newAmount}))
  }

  const contextValue = {cartItem, addToCart, removeFromCart, updateCartItemCount}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}

    </ShopContext.Provider>
  )
}

