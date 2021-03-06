import auth0 from '@/utils/auth0'

export default async function logout(req, res) {
  await auth0.handleLogout(req, res)
    .then()
    .catch(e => {
      console.log(e)
      res.status(e.status || 400).end(e.message)
    })
}
