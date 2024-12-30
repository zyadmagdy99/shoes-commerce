import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='grid  grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-3'>
      {productList.map((product, index) => (
        <div key={index}>
        <ProductItem product={product}/>  
        </div>
      ))}
    </div>
  )
}

export default ProductList
