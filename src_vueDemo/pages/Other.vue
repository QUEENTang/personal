<template>
  <div class='other'>
    other
    <Something/>
  </div>
</template>

<script>
import Something from '../components/Something'

export default {
  components: {
    Something
  }
}
</script>

<style scoped>
.other {
  font-size: 50px
}
</style>
