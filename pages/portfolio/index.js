import React from 'react'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'
import { useGetUser } from '@/actions/user'
import PortfolioApi from '@/lib/api/portfolios'
import PortfolioCard from '@/components/PortfolioCard'
import { useRouter } from 'next/router'

const Portfolio = ({ portfolios }) => {
  const router = useRouter()
  const { data: userData, loading: userLoading } = useGetUser()

  return (
    <BaseLayout
      user={userData}
      loading={userLoading}
      header='Portfolios'
      bpClass='portfolio-page'>
      <Row>
        {portfolios.map(portfolio =>
          <Col key={portfolio._id} md='4' onClick={_ => router.push('/portfolio/[id]', `/portfolio/${portfolio._id}`)}>
            <PortfolioCard portfolio={portfolio} />
          </Col>
        )}
      </Row>
    </BaseLayout>
  )
}

// this function is called during the build time--will create static page and data may not update if changed in DB
// will keep same data until npm run build is run again
// good for lots of data that doesn't change often
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll()
  const portfolios = json.data
  return {
    props: { portfolios }
  }
}

export default Portfolio
