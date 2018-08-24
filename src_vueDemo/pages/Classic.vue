<template>
  <div class='classic'>
    classic
    <Something/>
    <Anything :msg='msg' @say='parentSay' />
  </div>
</template>

<script>
import Something from '../components/Something'
import Anything from '../components/Anything'

export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    parentSay (msg) {
      console.log(msg)
    }
  },
  components: {
    Something,
    Anything
  }
}
</script>

<style scoped>
.classic {
  font-size: 50px
}
</style>
