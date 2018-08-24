<template>
  <div class='home'>
    <div @click='goTo("/other")'>
      home1
    </div>
    <div @click='goTo("/classic")'>
      home2
    </div>
    <button @click='getInfo'>按钮</button>
    <p id='show'></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      session: null,
      connection: Object
    }
  },

  mounted () {
    let self = this

    let autobahn = require('autobahn')

    console.log('Ok, AutobahnJS loaded', autobahn.version)
    var principal = 'backend'
    var ticket = 'sg-ai.com'

    function onchallenge (session, method, extra) {
      console.log('onchallenge', method, extra)

      if (method === 'ticket') {
        return ticket
      } else {
        throw "don't know how to authenticate using '" + method + "'"
      }
    }
    // 连接wamp
    var connection = new autobahn.Connection({
      url: 'wss://dcrossbar.sg-ai.com/ws',
      realm: 'realm1',
      authmethods: ['ticket'],
      authid: principal,
      onchallenge: onchallenge
    })
    // 连接成功
    connection.onopen = function (session, details) {
      self.session = session
    }
    // 连接失败
    connection.onclose = function (reason, details) {
      console.log('disconnected', reason, details.reason, details)
    }
    // 打开连接
    connection.open()
  },

  methods: {
    goTo (path) {
      this.$router.push(path)
    },
    getInfo () {
      this.session.call('com.sg-ai.wewo.wwae.forntend.test_api1_js', ['111', 2])
        .then(function (res) {
          console.log(res, 111)
          if (res) {
            document.getElementById('show').innerHTML = res
          }
        })
    }
  }
}
</script>

<style scoped>
.home {
  font-size: 50px
}
</style>
