import auth0 from '@/utils/auth0'

export default async function callback(req, res) {
  await auth0.handleCallback(req, res, {redirectTo: '/'})
    .then()
    .catch(e => {
      console.log(e)
      res.status(e.status || 400).end(e.message)
    })
}
