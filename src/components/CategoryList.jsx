
import React from 'react'
import CategoryButton from './CategoryButton'

const CategoryList = () => {

  const categories = [
  {
    id: 1, 
    category: "General"
  }, 
  {
    id: 2, 
    category: "Nation"
  },
  {
    id: 3, 
    category: "Business"
  },
  {
    id: 4, 
    category: "Technology"
  },
  {
    id: 5, 
    category: "Entertainment"
  },
  {
    id: 6, 
    category: "Sports"
  },
  {
    id: 7, 
    category: "Science"
  },
  {
    id: 8, 
    category: "Health"
  }
]
  return (
    <div className='py-4 px-24 w-full overflow-scroll flex justify-between'>
      {categories.map((category) => (
      <CategoryButton category={category.category} key={category.id}/>
    ))}
    </div>
  )
}

export default CategoryList