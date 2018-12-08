import request from '~/plugins/axios'

// 列表
export function tagList(data) {
  return request({
    url: '/tag/list',
    method: 'get',
    data
  })
}
