import axios from 'axios'
import SERVER_PATH from '@/values/server'
import router from '@/routes/routes'


const API_URL = `${SERVER_PATH}`
const api = axios.create({
  baseURL: API_URL,
})

api.send = (path, method = 'GET', params = null, body = null) => new Promise((resolve, reject) => {
  if (params !== null) {
    const query = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&')
    path = `${path}?${query}`
  }

  api[method.toLowerCase()](path, body).then(response => {
    try {
      if (response.data === undefined) {
        reject({ success: false, message: response, data: response })
      }

      if (response.success) {
        resolve({
          success: true,
          data: response.data.data,
          message: response.data.message,
          extra: response.data,
        })
      } else {
        resolve({
          success: false,
          data: response.data,
          message: response.data.message,
        })
      }
    } catch (e) {
      reject({ message: e, success: false, data: null })
    }
  })
})

api.interceptors.response.use(({ data, status, statusText }) => {
  if (status === 200) {
    return Promise.resolve({
      success: true,
      data,
      statusText,
    })
  }
  return Promise.resolve({
    success: true,
    data,
    statusText,
  })
}, error => {
  if (error.response.data.message === 'Unauthenticated.' && router.history.current.name !== 'login') {
    router.push('logout')
  }
  return Promise.resolve(
    {
      success: false,
      data: error.response.data,
      statusText: error.response.statusText,
    }
  )
})

api.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'))
  config.headers.Authorization = `Bearer ${user ? user.access_token : ''}`
  return config
})

export default api
