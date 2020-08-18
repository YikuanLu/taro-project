import Taro from '@tarojs/taro'
import { axios } from 'taro-axios'

const baseUrl = process.env.url
const config = {
  timeout: 120000
}
Object.assign(axios.defaults, config)
axios.defaults.headers['Content-Type'] = 'application/json'

const clearAll = () => {
  Taro.clearStorage()
  Taro.redirectTo({ url: '/pages/login/index' })
}

// 请求前拦截
axios.interceptors.request.use(
  (req) => {
    const token = Taro.getStorageSync('token')
    req.headers.token = token
    req.headers.ctype = 'h5'
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 返回后拦截
axios.interceptors.response.use(
  ({ data }) => {
    if (data.code === 200) {
      return data.body
    }
    if (data.code === 10002) {
      Taro.showToast({
        title: '登录过期',
        icon: 'none',
        duration: 2000
      })
      clearAll()
    }
    if (data.code !== 200) {
      Taro.showToast({
        title: data.message,
        icon: 'none',
        duration: 2000
      })
      // Taro.atMessage({
      //   'message': data.message,
      //   'type': 'error'
      // })
    }
    return Promise.reject(data)
  },
  (err) => {
    try {
      if (JSON.stringify(err).includes('403')) {
        clearAll()
      }
    } catch (error) {
      clearAll()
    }
    Taro.showToast({
      title: '网络异常',
      icon: 'none',
      duration: 2000
    })
    return Promise.reject(err)
  }
)

// post请求
axios.post = (url, params) => {
  const envType = Taro.getEnv()
  if (envType === 'WEAPP') url = `${baseUrl}${url}`
  return axios({
    method: 'post',
    url,
    data: params
  })
}

// get请求
axios.get = (url, params) => {
  const envType = Taro.getEnv()
  if (envType === 'WEAPP') url = `${baseUrl}${url}`
  return axios({
    method: 'get',
    url,
    params
  })
}

export default axios
