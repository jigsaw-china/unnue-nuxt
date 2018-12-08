import request from '~/plugins/axios'

// 列表
export function articleList(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params
  })
}

// 详情
export function articleDetail(id) {
  return request({
    url: `/article/detail/${id}`,
    method: 'get'
  })
}

// 点赞
export function articleLike(data) {
  return request({
    url: '/article/like',
    method: 'put',
    data
  })
}
