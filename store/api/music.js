import request from '~/plugins/axios'

// 列表
export function musicList() {
  return new Promise(async (resolve) => {
    const list = await request({
      baseURL: 'https://401852215.varwx.club',
      url: '/music',
      method: 'get'
    })
    resolve({
      data: {
        code: 1,
        result: {
          list
        }
      }
    });
  })
}
