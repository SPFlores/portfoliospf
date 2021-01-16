import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import Link from 'next/link'
import { useGetData } from '@/actions'

const Portfolio = _ => {
  const { data, error, loading } = useGetData('api/v1/posts')
  return (
    <BaseLayout>
      {loading
        ? <p>Loading data...</p>
        : error
          ? <div className='alert alert-danger' style={{ width: '60%', margin: 'auto' }}>{error.message}</div>
          : <div>
            <h1>Portfolio</h1>
            <ul>
              {data.map(post =>
                <li key={post.id}>
                  <Link as={`/portfolio/${post.id}`} href='/portfolio/[id]'>
                    <a>
                      <h5>{post.id}: {post.title}</h5>
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </div>}
    </BaseLayout>
  )
}

export default Portfolio
