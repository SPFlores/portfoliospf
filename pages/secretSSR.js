import BaseLayout from '@/components/layouts/BaseLayout'
import { withAuth } from '@/utils/auth0'

const SecretSSR = ({ user, title }) => {
  return (
    <BaseLayout
      user={user}
      loading={false}>
      <div>
        <h1>Secret - 2 hello {user && user.nickname}</h1>
        <h1>{title}</h1>
      </div>
    </BaseLayout>
  )
}

const getTitle = _ => {
  return new Promise((resolve) => {
    setTimeout(_ => {
      resolve({ title: 'my new title' })
    }, 500)
  })
}

export const getServerSideProps = withAuth(async () => {
  const title = await getTitle()
  return title
})

export default SecretSSR
