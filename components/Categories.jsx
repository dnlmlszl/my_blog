import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className='bg-white shadow-xl rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl text-[#756f75] mb-8 font-semibold border-b border-[#756f75] pb-4'>
        Categories
      </h3>
      {categories && categories.map((category) => (
        <Link 
          key={category.slug}
          href={`/category/${category.slug}`}
        >
          <span className='cursor-pointer transition duration-700 hover:text-[#eeae89] text-[#756f75] block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories