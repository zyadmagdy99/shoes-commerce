import Image from 'next/image'
import React from 'react'

function ProductBanner({productDetails}) {
  

  return (
    <div>
      {
        productDetails[0]?.banner[0]?.url?      <Image className='rounded-lg' src={productDetails[0]?.banner[0]?.url || '/path/to/placeholder.jpg'} alt='product' width={400} height={350}/>
        :       <div className='w-[300px] h-[250px] animate-pulse bg-slate-200'></div>

      }
    </div>
  )
}

export default ProductBanner
