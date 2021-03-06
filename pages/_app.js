import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import '@/styles/main.scss'

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default App
