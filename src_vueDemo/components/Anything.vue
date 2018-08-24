<template>
  <div>
    <div class='any' @click='say'>
      {{msg}}
    </div>
    <div>
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
import bus from '../assets/eventBus.js'
export default {
  props: {
    msg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      childrenSay: 'hello vue vue',
      message: ''
    }
  },
  methods: {
    say () {
      this.$emit('say', this.childrenSay)
    }
  },
  created () {
    // let self = this
    bus.$on('msg', e => {
      this.message = e
      console.log(`传送的数据是：${e}`)
    })
  }
}
</script>

<style scoped>

</style>
