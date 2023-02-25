import React from 'react'
import { products } from '../products'
import {Product} from './Product'
import './shop.css'


export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Gaming Shop</h1>
      </div>
      <div className='products'>
        {products.map((product) => {
          return  <Product data={product}/>

        })}
      </div>
    </div>
  )
}

