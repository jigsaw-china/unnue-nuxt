import request from '~/plugins/axios'

// 个人档
export function profile() {
  return request({
    url: `/setting/profile`,
    method: 'get'
  })
}
