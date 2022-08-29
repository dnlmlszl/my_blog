import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  }, [slug])
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl text-[#756f75] mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts && relatedPosts.map((post) => (
        <div key={post.title} className='flex text-[#756f75] items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-sm' />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-[#756f75] font-xs'>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md text-[#756f75]'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget