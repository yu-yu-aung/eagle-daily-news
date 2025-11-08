import React from 'react'
import CategoryButton from './CategoryButton'

const CategoryList = () => {

  const categories = [{
    id: 1, 
    category: "General"
    

Nation
Business
Technology
Entertainment
Sports
Science
Health
  }, 
  {
    id: 2, 
    category: "World"
  },
  {
    id: 3, 
    category: "World"
  },
  {
    id: 2, 
    category: "World"
  },
  {
    id: 2, 
    category: "World"
  },
  {
    id: 2, 
    category: "World"
  },
  ]
  return (
    categories.map((category, index) => {
      <CategoryButton category={category} key={index}/>
    })
  )
}

export default CategoryList