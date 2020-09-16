import axios from 'axios'
const baseUrl = '/api/blogs'
// const baseUrl = 'http://localhost:8001/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }