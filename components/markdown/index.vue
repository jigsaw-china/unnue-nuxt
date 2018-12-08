<template>
  <div class="simplemde-container">
    <textarea ref="textarea"/>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css'
  import 'simplemde/dist/simplemde.min.css'

  export default {
    name: 'SimplemdeMd',
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      toolbar: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    data() {
      return {
        simplemde: null,
        hasChange: false
      }
    },
		watch: {
			value(val) {
				if (val === this.simplemde.value() && !this.hasChange) return
				this.simplemde.value(val)
			}
		},
    mounted() {
      const SimpleMDE = require('simplemde')
      this.simplemde = new SimpleMDE({
        element: this.$refs.textarea,
        autoDownloadFontAwesome: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : undefined,
        spellChecker: false,
        hideIcons: ['guide', 'clean-block', 'side-by-side', 'fullscreen'],
        placeholder: this.placeholder,
        status: false
      })
      if (this.value) {
        this.simplemde.value(this.value)
      }
      this.simplemde.codemirror.on('change', () => {
        if (this.hasChange) {
          this.hasChange = true
        }
        this.$emit('input', this.simplemde.value())
      })
    }
  }
</script>

<style lang="scss">
  .simplemde-container{
    line-height: 1.5;
    textarea{
      opacity: 0;
    }
    .editor-toolbar{
      border: none;
      padding: 0;
      font-size: 14px;
      &:before,
      &:after{
        background: linear-gradient(45deg,#f9f9f9,#bdc3c7,#f9f9f9);
      }
    }
    .CodeMirror,
    .CodeMirror-scroll {
      min-height: 120px;
      border: none;
      font-size: 14px;
    }
  }
</style>
