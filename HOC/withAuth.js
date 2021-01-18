import { useGetUser } from '@/actions/user'
import Redirect from '@/components/shared/Redirect'
import BaseLayout from '@/components/layouts/BaseLayout'

const withAuth = Component => {
  return props => {
    const { data, loading } = useGetUser()
    if (loading) {
      return (
        <BaseLayout
          user={data}
          loading={loading}>
          <p>Loading...</p>
        </BaseLayout >
      )
    }

    if (!data) {
      return <Redirect ssr to={'/api/v1/login'} />
    } else {
      return (
        <Component {...props} data={data} loading={loading} />
      )
    }
  }
}

export default withAuth
