"use client"
import React, { useState } from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  const [currentPage, setcurrentPage] = useState(1)
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const nextPage = () => {
    setcurrentPage(currentPage + 1)
  }
  const prevPage = () => {
   if(currentPage>1) setcurrentPage(currentPage - 1)
  }
  return (
    <div className='flex flex-col gap-9'>
    <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
      {currentItems.map((product, index) => (
        <div key={index}>
        <ProductItem product={product}/>  
        </div>
      ))}
    
    </div>
      <div>
      <div className='container mx-auto flex justify-center items-center gap-3'>
      <button onClick={prevPage} disabled={currentPage === 1}>
      Previous
    </button>
    <button onClick={nextPage} disabled={currentPage === totalPages}>
      Next
    </button>
      </div>
      </div>
    </div>
  )
}

export default ProductList
