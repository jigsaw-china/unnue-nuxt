<template>
  <div class="box">
    <canvas ref="canvas" width="450" height="450" @click="chessClick"></canvas>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        chess: {},
        context: {},
        chessBoard: [], // 记录是否走过
        me: true,
        count: 0, // 所有赢法数量
        wins: [], // 赢法数组
        myWin: [], // 我方赢法的统计数组
        computerWin: [], // 计算机赢法的统计数组
        over: false,
      }
    },
    mounted () {
      setTimeout(_ => {
        this.init()
      })
    },
    methods: {
      // 初始化
      init () {
        this.chess = this.$refs.canvas
        this.context = this.chess.getContext("2d")
        this.drawImage( _ => {
          this.drawChessBoard()
        })
        this.fillArray()
      },
      // 填充数组
      fillArray () {
        // 是否走过
        for (let i = 0; i < 15; i++) {
          this.chessBoard[i] = []
          for (let j = 0; j < 15; j++) {
            this.chessBoard[i][j] = 0
          }
        }
        // 赢法数组
        for (let i = 0; i < 15; i++) {
          this.wins[i] = []
          for (let j = 0; j < 15; j++) {
            this.wins[i][j] = []
          }
        }
        // 横
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 11; j++) {
            for (let k = 0; k < 5; k++) {
              this.wins[i][j+k][this.count] = true
            }
            this.count++
          }
        }
        // 竖
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 11; j++) {
            for (let k = 0; k < 5; k++) {
              this.wins[j+k][i][this.count] = true
            }
            this.count++
          }
        }
        // 斜
        for (let i = 0; i < 11; i++) {
          for (let j = 0; j < 11; j++) {
            for (let k = 0; k < 5; k++) {
              this.wins[i+k][j+k][this.count] = true
            }
            this.count++
          }
        }
        // 反斜
        for (let i = 0; i < 11; i++) {
          for (let j = 14; j > 3; j--) {
            for (let k = 0; k < 5; k++) {
              this.wins[i+k][j-k][this.count] = true
            }
            this.count++
          }
        }
        // 赢法的统计数组
        for (let i = 0; i < this.count; i++) {
          this.myWin[i] = 0
          this.computerWin[i] = 0
        }
      },
      // 绘制水印
      drawImage (callback) {
        const { context } = this
        const img = new Image()
        img.src = "/images/logo.svg"
        img.onload = _ => {
          context.drawImage(img, (450 - img.width)/2, (450 - img.height)/2, img.width, img.height)
          callback()
        }
      },
      // 绘制棋盘
      drawChessBoard () {
        const { context } = this
        context.strokeStyle = '#bfbfbf'
        for (let i = 0; i < 15; i++) {
          context.moveTo(15 + i * 30, 15)
          context.lineTo(15 + i * 30, 435)
          context.stroke()
          context.moveTo(15, 15 + i * 30)
          context.lineTo(435, 15 + i * 30)
          context.stroke()
        }
      },
      // 落子实现
      onStep (x, y, me) {
        const { context } = this
        context.beginPath()
        context.arc(15 + x * 30, 15 + y * 30, 13, 0, 2 * Math.PI)
        context.closePath()
        const gradient = context.createRadialGradient(15 + x * 30 + 2, 15 + y * 30 - 2, 13, 15 + x * 30 + 2, 15 + y * 30 - 2, 0)
        if (me) {
          gradient.addColorStop(0, '#0a0a0a')
          gradient.addColorStop(1, '#636766')
        } else {
          gradient.addColorStop(0, '#d1d1d1')
          gradient.addColorStop(1, '#f9f9f9')
        }
        context.fillStyle = gradient
        context.fill()
      },
      // 我方落子
      chessClick (e) {
        if (this.over) {
          return
        }
        if (!this.me) {
          return
        }
        const ox = e.offsetX
        const oy = e.offsetY
        const x = Math.floor(ox/30)
        const y = Math.floor(oy/30)

        if (this.chessBoard[x][y] === 0) {
          this.chessBoard[x][y] = 1
          this.onStep(x, y, this.me)

          // 统计赢法
          for (let k = 0; k < this.count; k++) {
            if (this.wins[x][y][k]) {
              this.myWin[k]++
              this.computerWin[k] = 6
              if (this.myWin[k] === 5) {
                alert('你赢了')
                this.over = true
              }
            }
          }
          if (!this.over) {
            this.me = !this.me
            this.computerAI()
          }
        }
      },
      // 计算机落子
      computerAI () {
        const myScore = []
        const computerScore = []
        let max = 0 // 最大分数
        let u = 0, v = 0 // 所在坐标

        for (let i = 0; i < 15; i++) {
          myScore[i] = []
          computerScore[i] = []
          for (let j = 0; j < 15; j++) {
            myScore[i][j] = 0
            computerScore[i][j] = 0
          }
        }
        // 遍历棋盘
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 15; j++) {
            if (this.chessBoard[i][j] === 0) {
              // 遍历所有赢法
              for (let k = 0; k < this.count; k++) {
                if (this.wins[i][j][k]) {
                  // 我方
                  if (this.myWin[k] === 1) {
                    myScore[i][j] += 200
                  } else if (this.myWin[k] === 2) {
                    myScore[i][j] += 400
                  } else if (this.myWin[k] === 3) {
                    myScore[i][j] += 2000
                  } else if (this.myWin[k] === 4) {
                    myScore[i][j] += 10000
                  }
                  // 计算机
                  if (this.computerWin[k] === 1) {
                    computerScore[i][j] += 220
                  } else if (this.computerWin[k] === 2) {
                    computerScore[i][j] += 420
                  } else if (this.computerWin[k] === 3) {
                    computerScore[i][j] += 2100
                  } else if (this.computerWin[k] === 4) {
                    computerScore[i][j] += 20000
                  }
                }
              }
              // 比较分数
              if (myScore[i][j] > max) {
                max = myScore[i][j]
                u = i
                v = j
              } else if (myScore[i][j] === max) {
                if (computerScore[i][j] > computerScore[u][v]) {
                  u = i
                  v = j
                }
              }
              if (computerScore[i][j] > max) {
                max = computerScore[i][j]
                u = i
                v = j
              } else if (computerScore[i][j] === max) {
                if (myScore[i][j] > myScore[u][v]) {
                  u = i
                  v = j
                }
              }
            }
          }
        }
        this.onStep(u, v, false)
        this.chessBoard[u][v] = 2
        // 统计赢法
        for (let k = 0; k < this.count; k++) {
          if (this.wins[u][v][k]) {
            this.computerWin[k]++
            this.myWin[k] = 6
            if (this.computerWin[k] === 5) {
              alert('计算机赢了')
              this.over = true
            }
          }
        }
        if (!this.over) {
          this.me = !this.me
        }
      }
    },
    head () {
      return {
        title: '五子棋 | 娱乐',
        meta: [
          { hid: 'keywords', name: 'keywords', content: 'AI五子棋' },
          { hid: 'description', name: 'description', content: 'AI五子棋' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    canvas{
      border: 1px solid #ddd;
      margin: 20px auto;
      background: #fff;
      box-shadow: -2px 0 2px #efefef, 5px 5px 5px #b9b9b9;
    }
  }
</style>
