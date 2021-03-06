import auth0 from '@/utils/auth0'

export default async function me(req, res) {
  await auth0.handleProfile(req, res)
    .then()
    .catch(e => {
      console.log(e)
      res.status(e.status || 400).end(e.message)
    })
}
