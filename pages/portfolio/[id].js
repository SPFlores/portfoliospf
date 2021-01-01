import React from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import axios from 'axios'

const Portfolio = ({ item }) => {
  return (
    <BaseLayout>
      <h1>{item.title}</h1>
      <p>Body: {item.body}</p>
      <p>ID: {item.id}</p>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async ({ query }) => {
  const item = await axios.get(`http://jsonplaceholder.typicode.com/posts/${query.id}`)
    .then(({ data }) => data)
    .catch(e => console.log(e))
  return { item }
}

export default Portfolio
