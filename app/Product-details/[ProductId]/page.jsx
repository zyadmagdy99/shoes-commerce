"use client"
import BreadCrunb from '@/app/_components/BreadCrumb';
import ProductApi from '@/app/_utils/ProductApi';
import  React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import ProductList from '@/app/_components/ProductList';
import { usePathname } from 'next/navigation';


function ProductDetails({params}) {
  const path = usePathname();
  const [related, setrelated] = useState([])
  useEffect(() => {
    getProduct_();
  }, [])
  
  const getProduct_ = () => {
    ProductApi.getProducts().then(res=>{
      console.log("related item",res?.data?.data);
      setrelated(res?.data?.data)
    })
  }

const [productDetails, setproductDetails] = useState({})
  const ProductId = React.use(params).ProductId; 

  useEffect(() => {
     getProductById_();
    }, [ProductId])
  
  const getProductById_ = () => {
    ProductApi.getProductByProductId(ProductId).then(res=>{
      console.log("product item",res.data.data);
      setproductDetails(res.data.data)
    })
  }
  return (
    <div className='px-10 py-8 md:px-28'>
      <div className='flex justify-center '>
      <BreadCrunb path={path}/>

      </div>
      <div className='flex flex-col md:flex-row  mt-10 items-center justify-around'> 
        <ProductBanner productDetails={productDetails}/>
        <ProductInfo productDetails={productDetails}/>
      </div>
      <div className='mt-10'>
          <h2 className='text-[30px] text-center font-bold my-8'>Similar Products</h2>
          <ProductList productList={related}/>
        </div>
    </div>
  )
}

export default ProductDetails
