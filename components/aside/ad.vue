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
            title: '【全民云计算】云主机低至2折',
            url: 'https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=vskf9gi6',
            src: 'https://static.unnue.com/FpW721hzgoCfYwkfwtJGPO3jjQzs'
          },
          {
            title: '【阿里云自营建站】千套模板 品质保证',
            url: 'https://www.aliyun.com/jianzhan/?userCode=vskf9gi6',
            src: 'https://static.unnue.com/FvWhS1KSbCrZo0NhCsgpk07daQjY'
          },
          {
            title: '新客户代金券',
            url: 'https://cloud.tencent.com/redirect.php?redirect=1025&cps_key=f935480bd75a03f88093a2a1e46136d7&from=console',
            src: 'https://static.unnue.com/Fv37fc6CsEQo2DNqFcMm36JB6Cjh'
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
