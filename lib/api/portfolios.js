import axios from 'axios'

class PortfolioApi {
  getAll = _ => {
    return axios.get(`${process.env.PORTFOLIO_API_URL}/portfolios`)
  }

  getById = id => {
    return axios.get(`${process.env.PORTFOLIO_API_URL}/portfolios/${id}`)

  }
}

export default PortfolioApi
