<template>
  <div class="aside-block">
    <div class="title">
      <span class="iconfont icon-aliyun"></span> 优惠券
    </div>
    <slider :dataList="adList"/>
  </div>
</template>

<script>
  import Slider from '~/components/slider'

  export default {
    name: 'aside-ad',
    components: {
      Slider
    },
    data () {
      return {
        adList: [
          {
            title: '阿里云通用优惠券',
            url: 'https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=vskf9gi6',
            src: 'https://static.unnue.com/FhDa-TZfzp--0q5CquOx0ivnNn4N'
          },
          {
            title: '七牛云存储',
            url: 'https://portal.qiniu.com/signup?code=3lpah6am8bc5u',
            src: 'https://static.unnue.com/Fq27kwXlL2duQaB8djhocrWXd14q'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .aside-block{
    margin-bottom: 5px;
  }
</style>
