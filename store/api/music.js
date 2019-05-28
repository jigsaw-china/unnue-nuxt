import request from '~/plugins/axios'

// 列表
export function musicList() {
  return new Promise((resolve) => {
    resolve({
      data: {
        code: 1,
        result: {
          list: [
            {
              title: '爱，很简单',
              url: 'http://10.2.9.130/111.202.85.146/amobile.music.tc.qq.com/C400001yZ7Tf0kudte.m4a?guid=1198096278&vkey=02662453F5C7991775542C6526FACC2B6F5AC66F2E8685F1858C51F7BB14B81FDCE6FB2452F59138498BC1564568E4C0C8370C21DEC93272&uin=7131&fromtag=66',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003ROVwj4PqLPa.jpg?max_age=2592000',
              artist: '陶喆',
              lyric: "W3RpOueIse+8jOW+iOeugOWNlV0KW2FyOumZtuWWhl0KW2FsOkRhdmlkIFRhbyDlkIzlkI3kuJPovpFdCltieTpdCltvZmZzZXQ6MF0KWzAwOjAwLjAwXeeIse+8jOW+iOeugOWNlSAoTG92ZSBJcyBTaW1wbGUpICjjgIrljZXouqvnlLflpbPjgIvnlLXlvbHmj5Lmm7J844CK5Y2V6Lqr55S35aWzMuOAi+S4u+mimOabsikgLSDpmbblloYgKERhdmlkIFplZSBUYW8pClswMDowNC4zN13or43vvJrlqIPlqIMKWzAwOjA4Ljc1Xeabsu+8mumZtuWWhgpbMDA6MTMuMTNd5b+Y5LqG5piv5oCO5LmI5byA5aeLClswMDoxNS43M10KWzAwOjE3LjE1XeS5n+iuuOWwseaYr+WvueS9oApbMDA6MTkuMTldClswMDoyMC42OV3mnInkuIDnp43mhJ/op4kKWzAwOjIyLjY1XQpbMDA6MjcuMDBd5b+954S26Ze05Y+R546w6Ieq5bexClswMDoyOS42N10KWzAwOjMxLjE1XeW3sua3sea3seeIseS4iuS9oApbMDA6MzMuMjNdClswMDozNC41OV3kvaDnnJ/nmoTlvojnroDljZUKWzAwOjM2LjgyXQpbMDA6NDEuMDJd54ix55qE5Zyw5pqX5aSp6buR6YO95bey5peg5omA6LCTClswMDo0NS4yM10KWzAwOjQ3LjgyXeaYr+aYr+mdnumdnuaXoOazleaKieaLqQpbMDA6NTEuMTJdClswMDo1Mi4wNV1Xb28KWzAwOjUzLjE2XQpbMDA6NTQuODNd5rKh5pyJ5ZCO5oKU5Li654ix5pel5aSc5Y676Lef6ZqPClswMDo1OS4wN10KWzAxOjAxLjcxXemCo+S4queWr+eLgueahOS6uuaYr+aIkQpbMDE6MDUuNTddV29vClswMTowNi41N10KWzAxOjA3Ljc2XUkgbG92ZSB5b3UKWzAxOjExLjg5XQpbMDE6MTMuOTJd5peg5rOV5LiN54ix5L2gClswMToxNS4yNF1CYWJ5ClswMToxNS44OV0KWzAxOjE3LjQyXeivtOS9oOS5n+eIseaIkQpbMDE6MTguOTddClswMToxOS44M11XdQpbMDE6MjAuNTldClswMToyMS41MV1JIGxvdmUgeW91ClswMToyNS4zN10KWzAxOjI3Ljg0XeawuOi/nOS4jeaEv+aEjwpbMDE6MjkuMTNdQmFieQpbMDE6MjkuNzRdClswMTozMS4yM13lpLHljrvkvaAKWzAxOjMyLjg0XQpbMDE6MzcuMzJd5LiN5Y+v6IO95pu05b+r5LmQClswMTozOS41NV0KWzAxOjQwLjY5XeWPquimgeiDveWcqOS4gOi1twpbMDE6NDIuNzldClswMTo0NC4xMF3lgZrku4DkuYjpg73lj6/ku6UKWzAxOjQ2LjQzXQpbMDE6NDkuMjBd6Jm954S25LiW55WM5Y+Y5Liq5LiN5YGcClswMTo1My4yNV0KWzAxOjU0LjU1XeeUqOacgOecn+ivmueahOW/gwpbMDE6NTYuNzBdClswMTo1OC4wNl3orqnniLHlj5jlvpfnroDljZUKWzAyOjAwLjE2XQpbMDI6MDEuODdd6K6p5a6D5Y+Y5b6X566A5Y2VClswMjowMy40NF0KWzAyOjA0LjYxXeeIseeahOWcsOaal+Wkqem7kemDveW3suaXoOaJgOiwkwpbMDI6MDguNjJdClswMjoxMS4yN13mmK/mmK/pnZ7pnZ7ml6Dms5Xmionmi6kKWzAyOjE0Ljk4XVdvbwpbMDI6MTUuODddClswMjoxOC4yMl3msqHmnInlkI7mgpTkuLrniLHml6XlpJzljrvot5/pmo8KWzAyOjIyLjkwXQpbMDI6MjUuMjFd6YKj5Liq55av54uC55qE5Lq65piv5oiRClswMjoyOC41M10KWzAyOjI5LjA4XVdvbwpbMDI6MzAuMDJdClswMjozMS4wN11JIGxvdmUgeW91ClswMjozNS4zMl0KWzAyOjM3LjQwXeS4gOebtOWcqOi/memHjApbMDI6MzguNjZdQmFieQpbMDI6MzkuMzFdClswMjo0MC44NV3kuIDnm7TlnKjniLHkvaAKWzAyOjQzLjExXVd1IHllYWgKWzAyOjQ1LjA3XUkgbG92ZSB5b3UKWzAyOjQ4LjkxXQpbMDI6NDkuNzddT2ggeWVzIEkgZG8KWzAyOjUxLjM4XeawuOi/nOmDveS4jeaUvuW8g+i/meeIseS9oOeahOadg+WIqQpbMDI6NTYuNjVdClswMzowMC41OV3lpoLmnpzkvaDov5jmnInkuIDkupvlm7Dmg5EKWzAzOjAzLjEwXQpbMDM6MDUuMzldT2ggTm8KWzAzOjA2LjM2XQpbMDM6MDcuNDNd6K+36LS0552A5oiR55qE5b+D5YC+5ZCsClswMzoxMC4wM10KWzAzOjEyLjIxXeWQrOaIkeivtOedgCDniLHkvaAKWzAzOjE3LjUxXQpbMDM6MTkuMTddWWVzIEkgZG8KWzAzOjIwLjMxXQpbMDM6MzYuMjldQ29tZSBvbiBub3cKWzAzOjM3LjE1XQpbMDM6NTEuNjBdSSBsb3ZlIHlvdQpbMDM6NTUuNjhdT2ggeWVzIEkgZG8KWzAzOjU3LjU2XeS4gOebtOWcqOi/memHjApbMDM6NTguNTJdQmFieSBPaCB5ZWFoClswNDowMC43OV3kuIDnm7TlnKjniLHkvaAKWzA0OjAyLjA5XQpbMDQ6MDUuMDJdSSBsb3ZlIHlvdQpbMDQ6MDkuNjFdClswNDoxMS4zNl3msLjov5zpg73kuI3mlL7lvIPov5nniLHkvaDnmoTmnYPliKk="
            }
          ]
        }
      }
    });
  })
  // return request({
  //   url: `/music/list`,
  //   method: 'get'
  // })
}
