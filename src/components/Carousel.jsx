'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Carousel = ({imageUrls, autoSlide = false, autoSlideInterval = 3000}) => {

  const [current, setCurrent] = useState(0); 

  const prev = () => {
    setCurrent((current) => (current === 0 ? imageUrls.length - 1 : current - 1)); 
  }

  const next = () => {
    setCurrent((current) => (current === imageUrls.length -1 ? 0 : current + 1)); 
  }

  useEffect(() => {
    if (!autoSlide) return 
    const slideInterval = setInterval(next, autoSlideInterval)

    return () => clearInterval(slideInterval); 
  }, [autoSlide, autoSlideInterval])

  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-in-out duration-500' style={{width: `${imageUrls.length * 100}%`, transform: `translateX(-${current * (100 / imageUrls.length)}%)`}}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className='w-full'>
            <img  src={imageUrl} className='w-full h-96 object-cover'/>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40}/>
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40}/>
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {imageUrls.map((_, i) => (
            <div className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel