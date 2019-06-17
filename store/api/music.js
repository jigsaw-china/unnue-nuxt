import request from '~/plugins/axios'

// 列表
export function musicList() {
  return new Promise(async (resolve) => {
    const result = await request({
      url: 'https://401852215.varwx.club/music',
      method: 'get'
    })
    resolve({
      data: {
        code: 1,
        result: {
          list: result.data
        }
      }
    });
  })
}
