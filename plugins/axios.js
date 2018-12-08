import axios from 'axios'
import { baseURL, timeout } from "~/app.config";

const request = axios.create({
  baseURL,
  timeout
})

// 拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default request
