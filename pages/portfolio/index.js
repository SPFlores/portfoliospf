import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import Link from 'next/link'
import { useGetPosts } from '@/actions'

const Portfolio = _ => {
  const { posts, error } = useGetPosts()

  return (
    <BaseLayout>
      {error
        ? <div className='alert alert-danger' style={{ width: '60%', margin: 'auto' }}>{error.message}</div>
        : <div>
          <h1>Portfolio</h1>
          <ul>
            {posts.map(post =>
              <li key={post.id}>
                <Link as={`/portfolio/${post.id}`} href='/portfolio/[id]'>
                  <a>
                    <h5>{post.id}: {post.title}</h5>
                  </a>
                </Link>
              </li>
            )}
          </ul>
          {error &&
            <div className='alert alert-danger'>{error.message}</div>
          }
        </div>}
    </BaseLayout>
  )
}

export default Portfolio
