<template>
  <div id="app">
    <slider :socket="socket"/>
  </div>
</template>

<script>
import io from 'socket.io-client'
import slider from './components/slider'

export default {
  name: 'app',
  data () {
    return {
      socket: io.connect('http://localhost:3000')
    }
  },
  components: {
    slider
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  overflow: hidden;
}
</style>
