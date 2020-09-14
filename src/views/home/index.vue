<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <img :src="src">
    <div>{{ time }}</div>
    <div>
      <router-link to="/about">
        关于我
      </router-link>
    </div>
  </div>
</template>
<script>
import img from '@/asset/img/cola.png'
import '@/asset/style/index.css'
import dayjs from 'dayjs'
export default {
  name: 'App',
  data () {
    return {
      src: img,
      time: '00:00:00',
      timer: null
    }
  },
  created () {
    this.loopUpdateTime()
  },
  methods: {
    loopUpdateTime () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.time = dayjs().format('HH:mm:ss')
        this.loopUpdateTime()
      }, 0)
    }
  }
}
</script>
