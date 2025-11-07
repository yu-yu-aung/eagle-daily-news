import React from 'react'
import CategoryButton from './CategoryButton'

const CategoryList = () => {

  const categories = [{
    id: 1, 
    category: "Sports"
  }, 
  {
    id: 2, 
    category: "Politics"
  }, 
  ]
  return (
    categories.map((category, index) => {
      <CategoryButton category={category} key={index}/>
    })
  )
}

export default CategoryList