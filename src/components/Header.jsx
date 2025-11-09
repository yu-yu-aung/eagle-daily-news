'use client'

import useAuthStore from '@/store/useAuthStore'
import { Bell, Search, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {

  const router = useRouter(); 
  const {isLoggedIn} = useAuthStore(); 

  if (isLoggedIn) {
    return (
      <header className='bg-gray-50 shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-24 flex justify-between items-center py-5'>
      <Link 
      href="/" 
      className='flex gap-2 items-center'>
        <Image 
          src="/logo.png" 
          alt="The Eagle's Daily News Logo" 
          width={50} 
          height={50}/>
        <h2 className='text-xl font-bold italic font-serif'>
          Eagle's <br/> 
          Daily News
        </h2>
      </Link>
      
      <form className="max-w-md mx-auto w-[300px]">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500"/>
          </div>
          <input 
            type="search" 
            id="default-search" 
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search Mockups, Logos..." required />
          <button 
            type="submit" 
            className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 active:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              Search
          </button>
        </div>
      </form>

      <nav className='flex items-center justify-between gap-4'>
        <Link 
          href="/" 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            Home
        </Link>
        <Link 
          href="/latest-articles" 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            Latest News
        </Link>

        <Link 
          href="/notifications" 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            <Bell />
        </Link>
        
        <button 
          onClick={() => router.push("/auth?mode=login")} 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            <User size={32}/>
        </button>
      </nav>
    </header>
    )
  }
  return (
    <header className='bg-gray-50 shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-24 flex justify-between items-center py-5'>
      <Link 
      href="/" 
      className='flex gap-2 items-center'>
        <Image 
          src="/logo.png" 
          alt="The Eagle's Daily News Logo" 
          width={50} 
          height={50}/>
        <h2 className='text-xl font-bold italic font-serif'>
          Eagle's <br/> 
          Daily News
        </h2>
      </Link>
      
      <form className="max-w-md mx-auto w-[300px]">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500"/>
          </div>
          <input 
            type="search" 
            id="default-search" 
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search Mockups, Logos..." required />
          <button 
            type="submit" 
            className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 active:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              Search
          </button>
        </div>
      </form>

      <nav className='flex items-center justify-between gap-4'>
        <Link 
          href="/" 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            Home
        </Link>
        <Link 
          href="/latest-articles" 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            Latest News
        </Link>
        <button 
          onClick={() => router.push("/auth?mode=signup")} 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            Register
        </button>
        <button 
          onClick={() => router.push("/auth?mode=login")} 
          className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
            Log In
        </button>
      </nav>
    </header>
  )
}

export default Header