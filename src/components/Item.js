import React from 'react';
import './styles/Item.scss';

export default function Item({image_url, name, price}) {
  return (
    <div className='item'>
      <img src={image_url} alt='img' className='img'/>
      <div>
        <p className='item_name'>{name}</p>
        <p className='item_price'>${price/100}</p>
      </div>
    </div>
  )
}