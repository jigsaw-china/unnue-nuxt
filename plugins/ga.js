export default ({ app: { router }, store }) => {
  /*
  ** 每次路由变更时进行pv统计
  */
  router.afterEach((to, from) => {
    /*
    ** 告诉 GA 增加一个 PV
    */
		window._hmt = window._hmt || []
		window._hmt.push(['_trackPageview', to.fullPath])
  })
}
