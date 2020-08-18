import $axios from '@/utils/axios'

export const sendSms = (params) =>
  $axios.post('/api/common/sms/sendSms', params)

export const validateSms = (params) =>
  $axios.post('/api/common/sms/validateSmsCode', params)

// 获取广告
// 钱包广告位 id:203
export const getBanner = (params) =>
  $axios.post('/api/site/user/ads/getBanner', params)
