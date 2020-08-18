import Taro from '@tarojs/taro'
import moment from '@/utils/moment'

// 防抖
export function debounce(method, wait, immediate) {
  let timeout
  let result
  let debounced = function(...args) {
    return new Promise((resolve) => {
      let context = this
      if (timeout) {
        clearTimeout(timeout)
      }
      if (immediate) {
        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        }, wait)
        if (callNow) {
          result = method.apply(context, args)
          resolve(result)
        }
      } else {
        timeout = setTimeout(() => {
          result = method.apply(context, args)
          resolve(result)
        }, wait)
      }
    })
  }
  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

// 校验
export function validate(type, value) {
  const phoneRegx = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
  const passwordRegx = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  const code = /^[A-Za-z0-9]+$/
  let regex
  switch (type) {
    case 'phone':
      regex = phoneRegx
      break
    case 'password':
      regex = passwordRegx
      break
    case 'code':
      regex = code
      break
  }
  if (!regex.test(value)) {
    return false
  }
  return true
}

// 设置tabBar索引 [1,2,3,4,5]
export function setTab(dispatch, index) {
  Taro.setStorageSync('tabIndex', index)
  dispatch({
    type: 'setTab',
    payload: index
  })
}

/**
 * 时间戳转化为年 月 日 时 分 秒
 * @param number: 传入时间戳
 * @param format：返回格式，支持自定义
 * formatTime(timestamp, 'YYYY-MM-DD HH:mm:ss');//转换为日期：2017/03/03 03:03:03
 */
export function formatTime(timestamp, format) {
  if (!timestamp) {
    return '---'
  }
  return moment(+timestamp).format(format)
}

// 距今
export function dateForNow(date) {
  return moment(date).fromNow()
}

// 时段长度
// duration.get('hours');
// duration.get('minutes');
// duration.get('seconds');
export const timeDuration = (distance) => {
  const d = moment.duration(distance).get('days')
  const h = moment.duration(distance).get('hours')
  const m = moment.duration(distance).get('minutes')
  const s = moment.duration(distance).get('seconds')
  return `${d}天${h}小时${m}分${s}秒`
}

/**
 * 判断是否登录
 */
export function isLogin() {
  const token = Taro.getStorageSync('token') // token
  return !!token
}

// 获取query 参数
export const getRouterSearch = () => {
  try {
    const url = window.location.href
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    const obj = {}
    if (search.includes('&')) {
      const queryList = search.split('&')
      queryList.map((item) => {
        const keyWord = item.split('=')[0]
        const val = item.split('=')[1]
        obj[keyWord] = val
      })
    } else {
      console.log(search)
      const keyWord = search.split('=')[0]
      const val = search.split('=')[1]
      obj[keyWord] = val
    }
    return obj
  } catch (e) {
    new Error('可能获取不到 window 对象')
  }
}

// 格式化时长，单位毫秒
export const durationFormat = (distance) => {
  const m = moment.duration(distance).get('minutes')
  const s = moment.duration(distance).get('seconds')
  return `${m}:${s}`
}
