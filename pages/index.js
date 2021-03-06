import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import { Container, Col, Row } from 'reactstrap'
import Typed from 'react-typed'
import { useGetUser } from '@/actions/user'

const roles = [
  'Full stack developer',
  'Tech lover',
  'React.js developer',
  'General nerd',
  'Next.js developer',
  'Avid learner'
]

const Main = _ => {
  const { data, loading } = useGetUser()
  return (
    <BaseLayout
      className='cover'
      user={data}
      loading={loading}
      navClass='home'>
      <div className='main-section'>
        <div className='background-image'>
          <img src='/images/background-index.png' />
        </div>
        <Container>
          <Row>
            <Col md='6'>
              <div className='hero-section'>
                <div className={`flipper`}>
                  <div className='back'>
                    <div className='hero-section-content'>
                      <h2> Full Stack Web Developer </h2>
                      <div className='hero-section-content-intro'>
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img className='image' src='/images/section-1.png' />
                    <div className='shadow-custom'>
                      <div className='shadow-inner' />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md='6' className='hero-welcome-wrapper'>
              <div className='hero-welcome-text'>
                <h1>
                  Welcome to the portfolio website of Samantha Flores!
                  Get informed, collaborate and discover projects I have been involved in.
                </h1>
              </div>
              <Typed
                strings={roles}
                typeSpeed={40}
                backSpeed={50}
                backDelay={1000}
                showCursor
                className='self-typed'
                cursorChar='|'
                smartBackspace
                loop />
              <div className='hero-welcome-bio'>
                <h1>
                  Let's take a look at my work.
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>

  )
}

export default Main
