import request from '~/plugins/axios'

// 列表
export function commentList(params) {
  return request({
    url: `/comment/list/${params.id}`,
    method: 'get'
  })
}

// 评论
export function comment(data) {
  for (const item in data) {
    if(data[item] === '') {
      delete data[item]
    }
  }
  return request({
    url: '/comment/save',
    method: 'post',
    data
  })
}
