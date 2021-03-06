import auth0 from '@/utils/auth0'

export default async function login(req, res) {
  await auth0.handleLogin(req, res)
    .then()
    .catch(e => {
      console.log(e)
      res.status(e.status || 400).end(e.message)
    })
}
