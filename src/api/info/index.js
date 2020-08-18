import $axios from '@/utils/axios'

// 用户文章评论-分页列表查询
export const getArticleComment = (params) =>
  $axios.get('/api/info/user/articleComment/pageList', params)
// pc资讯文章贴子动态-分页列表查询
export const getArticleList = (params) =>
  $axios.get('/api/info/user/article/pageList', params)
