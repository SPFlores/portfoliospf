import axios from 'axios'

export default async (req, res) => {
  await axios.get(`http://jsonplaceholder.typicode.com/posts/${req.query.id}`)
    .then(({ data }) => {
      res.status(200)
      res.json(data)
    })
    .catch(e => {
      res.status(e.status || 400).json({ message: 'API error' })
    })
}
