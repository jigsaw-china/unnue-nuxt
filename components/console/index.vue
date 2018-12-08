<template>
  <div ref="console"
       class="console"
       :class="boxStatus">
    <div class="console-head">
      <div class="left" @mousedown="drag">
        <span class="iconfont icon-console"></span> C:\WINDOWS\system32\cmd.exe
      </div>
      <div class="right">
        <span class="iconfont icon-zoom-out" @click="setBoxStatus('zoom-out')"></span>
        <span class="iconfont icon-zoom-in" @click="setBoxStatus('zoom-in')"></span>
        <span class="iconfont icon-close" @click="setBoxStatus('close')"></span>
      </div>
    </div>
    <div class="console-body">
      <span class="history"
            v-for="(history, index) of historyList"
            :key="index">> {{history}}
      </span>
      <textarea v-focus
                ref="textarea"
                spellcheck="false"
                v-model="inputText"
                @keyup.enter="userEnter">
      </textarea>
    </div>
  </div>
</template>

<script>
  import { SITE } from '../../app.config'

  export default {
    name: 'console-index',
    data() {
      return {
        historyList: [],
        inputText: '',
        boxStatus: 'zoom-out'
      }
    },
    mounted() {
      this.historyList.push(navigator.userAgent)
    },
    methods: {
      drag(e){
        //目标元素
        let odiv = this.$refs.console;
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;

        document.onmousemove = (e)=>{
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          //移动当前元素
          odiv.style.left = left + 'px';
          odiv.style.top = top + 'px';
          odiv.style.transition = 'none';
        };

        document.onmouseup = _ => {
          document.onmousemove = null;
          document.onmouseup = null;
          odiv.style.transition = '';
        };
      },
      setBoxStatus (status) {
        if (status === 'close') {
          this.boxStatus +=' ' + status
        } else if (status === 'zoom-out') {
          this.boxStatus = status
          this.$refs.textarea.blur()
        } else if (status === 'zoom-in') {
          this.boxStatus = status
          this.$refs.textarea.focus()
        }
      },
      userEnter () {
        const inputText = this.inputText.slice(0, this.inputText.length - 1)
        switch (inputText) {
          // 打开后台登录
          case 'admin': {
            window.open(SITE.adminUrl)
            break
          }
          // 音乐
          case 'music': {
            window.open('https://y.qq.com')
            break
          }
        }
        this.historyList.push(inputText)
        this.inputText = ''
      }
    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .console{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 10000;
    width: var(500);
    height: var(300);
    margin: auto;
    background: #000;
    box-shadow: 0 0 4px rgba(0,0,0,.6);
    transform: translate(-50%, -50%);
    transition: .3s;
    overflow: hidden;
    &.zoom-out{
      top: auto;
      left: auto;
      right: 0;
      bottom: 0;
      width: var(140);
      height: var(26);
    }
    &.zoom-in{
    }
    &.close{
      width: 0;
      height: 0;
    }
  }
  .console-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #000;
    background: #fff;
    .left{
      flex: 1;
      padding: 5px;
      user-select: none;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .right{
      .iconfont{
        display: inline-block;
        padding: 5px 6px;
        margin: auto -1px;
        cursor: pointer;
        &:hover{
          background: #eee;
        }
      }
    }
  }
  .console-body{
    height: calc(100% - 26px);
    color: #eee;
    overflow: auto;
    textarea,
    .history{
      display: inline-block;
      width: 100%;
      border: none;
      padding: 2px 2px 2px 8px;
      font-size: 13px;
      line-height: 1.4;
      color: #eee;
      caret-color: #fff;
      background: none;
    }
    textarea{
      height: 100%;
      resize: none;
      &:focus{
        outline: none;
      }
    }
    &::selection {
      background-color: #fff;
      color: #000;
    }
    &::-webkit-scrollbar{
      width: 0;
    }
    &::-webkit-scrollbar-thumb{
      background: #ccc;
    }
  }
</style>
