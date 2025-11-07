"use client"

export default async function Page({params}){
  const {categoryName} = await params; 

  return <div>
    This is your articles related to {categoryName}! 
  </div>
}