import React from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import Link from 'next/link'
import axios from 'axios'

const Portfolio = ({ posts }) => {
  return (
    <BaseLayout>
      <div>
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
      </div>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async _ => {
  const posts = await axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => data.slice(0, 10))
    .catch(e => console.log(e))
  return { posts }
}

export default Portfolio
