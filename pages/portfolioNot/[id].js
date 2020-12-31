import React, { Component } from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import axios from 'axios'

class Portfolio extends Component {
  static async getInitialProps ({ query }) {
    const post = await axios.get(`http://jsonplaceholder.typicode.com/posts/${query.id}`)
      .then(({ data }) => data)
      .catch(e => console.log(e))
    return { post }
  }
  render () {
    return (
      <BaseLayout >
        <h1>{this.props.post.title}</h1>
        <p>Body: {this.props.post.body}</p>
        <p>ID: {this.props.post.id}</p>
      </BaseLayout >
    )
  }
}

export default withRouter(Portfolio)
