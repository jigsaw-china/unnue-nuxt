<template>
  <form class="comment">
    <div class="comment-head">
      <input type="text" class="el-input" placeholder="昵称 *" v-model="nickname"/>
      <input type="email" class="el-input" placeholder="邮箱 *" v-model="email"
             @blur="gravatar"/>
      <input type="url" class="el-input" placeholder="网址" v-model="site"/>
    </div>
    <div class="comment-body">
      <markdown :value="content" @input="input"/>
    </div>
    <div class="comment-foot">
      <button type="button" class="el-btn" @click="submit">提交</button>
    </div>
  </form>
</template>

<script>
  import Markdown from '~/components/markdown'
  import Gravatar from '~/plugins/gravatar'

  export default {
    name: 'comment-index',
    components: {
      Markdown
    },
    props: {
      articleId: {
        type: Number,
        default: 0
      },
      reqType: {
        type: String,
        default: 'Comment'
      }
    },
    data () {
      return {
        regexs: {
          email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
          url: /^((https|http):\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/
        },
        nickname: '',
        email: '',
        site: '',
        content: '',
        avatar: ''
      }
    },
    methods: {
      input (content) {
        this.content = content
      },
      gravatar () {
        if (!this.regexs.email.test(this.email)){
          return
        }
        this.avatar = Gravatar.url(this.email, {
          protocol: 'https'
        })
      },
      submit () {
        const { articleId, nickname, email, site, content, avatar, regexs } = this
        if (!nickname) {
          return alert('昵称不能为空')
        }
        if (!email) {
          return alert('邮箱不能为空')
        }
        if (!regexs.email.test(email)) {
          return alert('请输入一个正确的邮箱')
        }
        if (site && !regexs.url.test(site)) {
          return alert('请输入一个正确的网址')
        }
        if(!content) {
          return alert('内容不能为空')
        }

        // 提交评论
        this.$store.dispatch(this.reqType, {
          articleId,
          nickname,
          email,
          site,
          content,
          avatar
        }).then((result) => {
					if (result.data.code === 1){
						this.nickname = ''
						this.email = ''
						this.site = ''
						this.content = ''
						this.avatar = ''
					}
				})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment{
    padding: 10px 13px;
    background: #fff;
    .comment-head{
      display: flex;
      justify-content: space-between;
      justify-items: center;
      padding-bottom: 10px;
      input{
        width: 32%;
      }
    }
    .comment-foot{
      text-align: right;
    }
  }
</style>
