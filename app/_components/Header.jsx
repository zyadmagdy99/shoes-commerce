"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    <header className="bg-[#433250]">
  <div className="shadow-md mx-auto flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a className="block text-teal-600" href="/">
      <span className="sr-only">Home</span>
     <Image src="/logo.svg" alt="logo" width={50} height={50} />
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className="text-white transition hover:text-white/75" href="/"> Home </Link>
          </li>

          <li>
            <Link  className="text-white transition hover:text-white/75" href="/about"> About Us </Link>
          </li>

          <li>
            <Link className="text-white transition hover:text-white/75" href="/contact"> Contact Us </Link>
          </li>

        
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        
       
            <Link className="text-white text-xs sm:hidden transition hover:text-white/75" href="/contact"> Contact Us </Link>
            <Link  className="text-white text-xs sm:hidden transition hover:text-white/75" href="/about"> About Us </Link>

       
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
