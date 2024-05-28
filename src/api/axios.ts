import axios, { AxiosInstance, AxiosStatic } from 'axios'

export const axiosInstance = axios.create({
  //baseURL: 'http://77.246.98.129:8081',
  baseURL: 'http://localhost:8081/api',
  withCredentials: true
})

axiosValidator(axiosInstance)

function axiosValidator(item: AxiosStatic | AxiosInstance) {
  item.interceptors.response.use(undefined, (error) => {
    if (!Object.prototype.hasOwnProperty.call(error, 'response')) {
      console.error('Unexpected error during request')
      throw error
    }

    return new Promise((resolve, reject) => {
      switch (error.response.status) {
      case 401:
        console.warn('You are not authorized')
        break
      case 500:
        console.error('Server error occurred', error.response)
        break
      }
      reject(error)
    })
  })
}
