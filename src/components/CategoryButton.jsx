import Link from 'next/link'
import React from 'react'

const CategoryButton = ({category= ""}) => {
  return (
    <Link href={`/categories/${category}`}>
      <button  className='p-2 lg:p-3 border-2 border-blue-800 rounded-sm text-lg sm:text-xl lg:text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>
        {category}
      </button>
    </Link>
  )
}

export default CategoryButton