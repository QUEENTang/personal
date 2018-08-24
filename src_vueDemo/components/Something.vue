<template>
  <div>
    <div class='some'>
      something something something something something
    </div>
    <div>
      <button @click='bus'>按钮</button>
    </div>
  </div>
</template>

<script>
import bus from '../assets/eventBus.js'
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    bus () {
      bus.$emit('msg', '我要传给兄弟组件')
    }
  }
}
</script>

<style scoped>
.some {
  font-size: 30px
  color red
}
</style>
