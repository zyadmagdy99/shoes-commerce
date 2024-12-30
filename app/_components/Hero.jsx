import React from 'react'

function Hero() {
  return (
   <div>
   

<section
  className="relative h-screen bg-[#FFC48D] bg-[url('/bg.png')]  bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/50  sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="flex flex-col  ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-[30px] font-extrabold text-white sm:text-[70px]">
      "Where every step 


        <strong className="block font-extrabold text-rose-500 "> tells a story." </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-[22px]/relaxed">
      Step up your style with shoes that inspire every stride. Comfort, quality, and fashion—all in one perfect pair! 👟✨
      </p>

      {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div> */}
    </div>
  </div>
</section>
   </div>
  )
}

export default Hero
