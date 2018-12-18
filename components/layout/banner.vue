<template>
  <div class="banner" ref="banner">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'layout-banner',
    mounted () {
      this.drawCanvas()
    },
    methods: {
      drawCanvas() {
        var c, n = this.$refs.canvas;
        function t(c) {
          this.size = 3 * Math.random(),
            this.speed = .06 * Math.random(),
            this.x = c.x,
            this.y = c.y
        }
        function e() {
          this.reset()
        }
        c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
          function(c) {
            window.setTimeout(c, 1e3 / 60)
          },
          window.requestAnimationFrame = c;
        var i = n,
          a = i.getContext("2d"),
          s = this.$refs.banner.offsetWidth,
          o = this.$refs.banner.offsetHeight;
        i.width = s,
          i.height = o,
          t.prototype.reset = function() {
            this.size = 2 * Math.random(),
              this.speed = .05 * Math.random(),
              this.x = s,
              this.y = Math.random() * o
          },
          t.prototype.update = function() {
            this.x -= this.speed,
              this.x < 0 ? this.reset() : a.fillRect(this.x, this.y, this.size, this.size)
          },
          e.prototype.reset = function() {
            this.x = Math.random() * s,
              this.y = 0,
              this.len = 80 * Math.random() + 10,
              this.speed = 2 * Math.random() + 4,
              this.size = 2 * Math.random() + .1,
              this.waitTime = (new Date).getTime() + 3e3 * Math.random() + 300,
              this.active = !1
          },
          e.prototype.update = function() {
            this.active ? (this.x -= this.speed, this.y += this.speed, this.x < 0 || this.y >= o ? this.reset() : (a.lineWidth = this.size , a.beginPath(), a.moveTo(this.x, this.y), a.lineTo(this.x + this.len, this.y - this.len), a.stroke())) : this.waitTime < (new Date).getTime() && (this.active = !0)
          };
        for (var l = [], r = 0; r < o; r += 4) l.push(new t({
          x: Math.random() * s,
          y: Math.random() * o
        }));
        const img = new Image()
        img.src = "/images/banner.jpg";
        img.onload = function(){
          (function c() {
            a.fillStyle = a.createPattern(img,"no-repeat"),
              a.fillRect(0,0,s,o);

            var n = "rgba(255, 255, 255, 0.5)";
            a.fillStyle = n,
              a.strokeStyle = n;
            for (var t = l.length; t--;) l[t].update();
            window.requestAnimationFrame(c)
          }) ()
        };
        l.push(new e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner{
    height: var(250);
    overflow: hidden;
    /*animation: opacity 2s;*/
  }
  @keyframes opacity
  {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
