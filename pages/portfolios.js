import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import { Link } from '../routes'

class Portfolios extends Component {
  static async getInitialProps () {
    const posts = await axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => data.slice(0, 10))
      .catch(e => console.log(e))
    return { posts }
  }

  render () {
    return (
      <BaseLayout>
        <div>
          <h1>Portfolio</h1>
          <ul>
            {this.props.posts.map(post =>
              <li key={post.id}>
                <Link route={`/portfolio/${post.id}`}>
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
}

export default Portfolios
