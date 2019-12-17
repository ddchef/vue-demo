<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <img :src="src">
  </div>
</template>
<script>
import img from './asset/img/cola.png'
import './asset/style/index.css'
export default {
  name: 'App',
  data () {
    return {
      src: img
    }
  }
}
</script>
