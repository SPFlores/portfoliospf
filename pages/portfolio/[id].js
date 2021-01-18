import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import { useGetPostById } from '@/actions'
import { useGetUser } from '@/actions/user'
import PortfolioApi from '@/lib/api/portfolios'

const Portfolio = ({ portfolio }) => {
  const { data: userData, loading: userLoading } = useGetUser()

  return (
    <BaseLayout
      user={userData}
      loading={userLoading}
      header='Portfolio Detail Page'>
      {JSON.stringify(portfolio)}
    </BaseLayout>
  )
}

// data is fetched every time you go to the page, get new data from server--always newest data, not statically prerendered
// if information specific to user, should probably load on client side
export async function getServerSideProps({ query }) {
  const json = await new PortfolioApi().getById(query.id)
  const portfolio = json.data
  return { props: { portfolio } }
}

// page is created beforehand. may display old content without a new build
// also executed at build time
// export async function getStaticPaths() {
//   const json = await new PortfolioApi().getAll()
//   const portfolios = json.data
//   // get paths we want to prerender based on portfolio id
//   const paths = portfolios.map(item => {
//     return {
//       params: { id: item._id }
//     }
//   })
// // fallback false means that "not found" pages will res in 404
//   return { paths, fallback: false }
// }

// export async function getStaticProps({params}) {
//   const json = await new PortfolioApi().getById(params.id)
//   const portfolio = json.data
//   return {
//     props: { portfolio }
//   }
// }

export default Portfolio
