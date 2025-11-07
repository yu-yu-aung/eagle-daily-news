import Link from 'next/link'
import React from 'react'

const CategoryButton = ({category}) => {
  return (
    <Link href="/categories/[{category}]" className='p-3 text-2xl font-semibold hover:border-2 hover:border-orange-400 hover:bg-orange-50 hover:scale-3d'>{category}</Link>
  )
}

export default CategoryButton