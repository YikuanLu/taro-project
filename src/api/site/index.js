import $axios from '@/utils/axios'

// 获取首页banner
export const getBanner = (params) =>
  $axios.post('/api/site/user/ads/getBanner', params)

export const AAA = () => {}
