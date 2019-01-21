import axios from 'axios'

const baseUrl = 'http://localhost:5000'

export function shortenUrl(url) {
  return axios
    .post(`${baseUrl}/api/v1/shorten`, {
      original: url
    })
    .then(response => {
      return response.data
    })
}
