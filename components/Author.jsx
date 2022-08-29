import React from 'react'
import Image from 'next/image'

function Author({ author }) {
  return (
    <div className='text-center mt-20 mb-8 p-8 relative rounded-lg bg-black bg-opacity-70'>
      <div className="absolute left-0 right-0 -top-14">
        <Image 
          src={author.photo.url}
          unoptimized 
          alt={author.name}
          height='100px'
          width='85px'
          className='align-middle rounded-[50%]'
        />
      </div>
        <h3 className="text-[#e9e5e2] my-6 text-xl font-bold">{author.name}</h3>
        <p className="text-[#e9e5e2] text-lg">{author.bio}</p>
    </div>
  )
}

export default Author