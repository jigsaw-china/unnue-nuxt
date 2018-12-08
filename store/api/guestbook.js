import request from '~/plugins/axios'

// 列表
export function guestbookList() {
  return request({
    url: `/guestbook/list`,
    method: 'get'
  })
}

// 评论
export function guestbook(data) {
  for (const item in data) {
    if(data[item] === '') {
      delete data[item]
    }
  }
  return request({
    url: '/guestbook/save',
    method: 'post',
    data
  })
}
