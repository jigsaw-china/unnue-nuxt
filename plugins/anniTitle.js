export default ({ app: { router }, store }) => {
  /*
  ** 每次路由变更之后
  */
  router.afterEach((to, from) => {
    // window._anniTitle = window._anniTitle || null
    // clearInterval(window._anniTitle)
    //
    // setTimeout(_ => {
    //   const title = document.title
    //   const arr = []
    //   for (let index = 0; index < title.length; index++) {
    //     const value = title.charAt(index).toLocaleUpperCase()
    //     if (/^[A-Z]*$/.test(value)) {
    //       arr.push({
    //         index,
    //         value
    //       })
    //     }
    //   }
    //
    //   if (!arr.length) {
    //     return
    //   }
    //
    //   let i = 0
    //   window._anniTitle = setInterval(_ => {
    //     const tempArr = title.split('')
    //     tempArr.splice(arr[i].index, 1, arr[i].value)
    //     document.title = tempArr.join('')
    //     i < arr.length - 1 ? i++ : i = 0
    //   }, 800)
    // }, 800)
  })
}
