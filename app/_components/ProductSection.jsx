"use client";
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApi from '../_utils/ProductApi'

function ProductSection() {
  const [productList, setproductList] = useState([])
  useEffect(() => {
    getPtoducts_();
  }, [])
  
  const getPtoducts_ =() =>{
    ProductApi.getProducts().then(res=>{
      console.log(res.data.data);
      setproductList(res.data.data)
    })
  }
  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-4 text-[25px] text-center font-bold'>Our Latest Products</h2>
      <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection
