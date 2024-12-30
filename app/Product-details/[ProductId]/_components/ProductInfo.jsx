
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'

function ProductInfo({productDetails}) {

  console.log('====================================');
  console.log(productDetails);
  console.log('====================================');

  return (
    <div>
      {productDetails[0]?.Available ?    <div>

<h2 className='text-2xl font-bold mt-3 text-center md:text-left'>
    {productDetails[0]?.title}
</h2>
<h2 className='text-lg font-normal mt-5 text-gray-600 text-center md:text-left'>
    {productDetails[0]?.description[0]?.children[0]?.text}
</h2>
<div className='text-[11px] text-gray-500 flex justify-center items-center gap-2 mt-2'>
 {productDetails[0]?.Available? <BadgeCheck className='text-green-500 h-5 w-5'/>:<AlertOctagon className='text-red-500 h-5 w-5'/>} Availability
</div>
<h2 className='text-[32px] font-bold mt-5 text-primary text-center md:text-left'>
   $ {productDetails[0]?.price}
</h2>
<button className='flex gap-2 p-3 rounded-lg hover:bg-teal-600 hover:cursor-pointer bg-primary text-white mt-5 w-full justify-center md:w-auto'>
  <ShoppingCart/>
  Add to Cart
</button>
</div>    :

<span className="loader"></span>
}
    </div>
  )
}

export default ProductInfo
