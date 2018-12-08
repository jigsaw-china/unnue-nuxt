import request from '~/plugins/axios'

// 列表
export function categoryList(data) {
  return request({
    url: '/category/list',
    method: 'get',
    data
  })
}
