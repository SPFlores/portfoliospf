import axios from 'axios'

const handlePosts = async (req, res) => {
  await axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => {
      res.status(200)
      res.json(data.slice(0, 10))
    })
    .catch(e => {
      res.status(e.status || 400).json({ message: 'API error' })
    })
}

export default handlePosts
