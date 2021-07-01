import React, { useEffect, useState } from 'react';
import Item from './Item'
import './styles/Shop.scss'

export default function Shop() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/products');
      const data = await response.json();
      setProducts(data);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  const productsArr = products.map(product => <Item 
    key={product.id} 
    image_url={product.image_url}
    name={product.name}
    price={product.price}
    />)

  return (
    <div className='all_products'>
      {productsArr}
    </div>
  )
}