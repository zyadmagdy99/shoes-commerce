import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-[700px] md:flex-row bg-[#D8DADE] flex flex-col justify-center items-center overflow-hidden'>
      <div className='flex flex-col gap-4'>
      <h2 className='text-[30px] mt-4 font-semibold text-center play'>We're changing the whole game.</h2>
      <div className='mt-3 flex justify-center items-center gap-3 md:gap-6'>
            <Link href={"/"} className=' bg-black text-white text-s p-2 md:text-xl md:px-5 rounded-3xl hover:bg-white hover:text-black px-3 shadow-lg '>Get Started</Link>
            <Link href={"/contact"} className=' bg-white text-black text-s p-2 rounded-3xl md:text-xl md:px-5 hover:bg-black hover:text-white px-3 shadow-lg '>Send feedback</Link>
      </div>

      </div>
      <div className='flex justify-center items-center w-[500px] md:w-[900px] md:h-[900px] h-[500px]'>
      <Image src='/about.png' className='md:w-full' width={500} height={500} alt='about' />
      </div>
    </div>
  )
}

export default page
