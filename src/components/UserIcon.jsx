'use client'

import useArticleStore from '@/store/useArticleStore';
import useAuthStore from '@/store/useAuthStore';
import { BookMarked, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const UserIcon = () => {

  return (
    <Link href="/user-info"> 
      <User size={32}/>
    </Link>
        
    // <div>
    //   <button 
    //     id="dropdownDefaultButton" 
    //     data-dropdown-toggle="dropdown" 
    //     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" 
    //     type="button">
    //     <User size={32}/>
    //   </button>
    //   {/* Dropdown menu */}
    //   <div 
    //     id="dropdown" 
    //     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    //     <ul  
    //       className="py-2 text-sm text-gray-700 dark:text-gray-200" 
    //       aria-labelledby="dropdownDefaultButton">
    //       <li>
    //         <Link href="/user-info" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //           <User/> {user.userName}            
    //         </Link >
    //       </li>
    //       <li>
    //         <Link href="/saved-articles" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //           <BookMarked/> Saved Articles            
    //         </Link >
    //       </li>
    //       <li>
    //         <Link href="/saved-articles" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //           <LogOut/> Log Out            
    //         </Link >
    //       </li>
    //       <li>
    //         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  )
}

export default UserIcon