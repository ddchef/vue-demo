<template>
  <div>
  <h1>hello Vue</h1>
  <img :src="src"/>
  </div>
</template>
<script>
import img from './asset/img/cola.png'
export default {
  name:'App',
  data(){
    return {
      src:img
    }
  }
}
</script>