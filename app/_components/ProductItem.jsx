import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
function ProductItem({product}) {
    
  return (
    <Link href={`/Product-details/${product?.productid}`} className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <Image
      src={product?.banner[0]?.url}
      alt="Nike-1"
      width={400}
      height={350}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative flex justify-evenly items-center bg-white pt-3">
    <h3 className="text-sm  text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>


<div className="group relative inline-block focus:outline-none focus:ring">
  <span
    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span
    className="relative inline-block round border-2 border-current px-4 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
      <p className="tracking-wide">${product?.price}</p>
      </span>
</div>



    
  </div>
</Link>
    // <Link href={`/Product-details/${product?.productid}`} className='flex flex-col justify-center items-center p-1 border-teal-400 rounded-lg hover:border hover:cursor-pointer hover:shadow-lg'>
    //   <div className='bg-gray-300 rounded-lg p-3'>

    //   <div className='rounded-xl'>
    //  <Image  className='rounded-xl h-[240px] w-full object-contain' src={product?.banner?.url} alt={product.title} width={400} height={350}/>

    //   </div>
    //        <div className='flex max-w-[300px] w-full justify-around items-center md:px-5'>
    //         <div className='p-3 flex justify-center items-center gap-3'>
    //         <Footprints />
    //             <h2 className='text-lg line-clamp-1 text-center md:text-xl lg:text-[16px] font-medium'>
    //             {product?.title}
    //             </h2>
               
    //         </div>
    //                 <div className='font-bold md:pe-3'>
    //                     ${product?.price}
    //                 </div>
    //        </div>
    //   </div>
    // </Link>
  )
}

export default ProductItem
