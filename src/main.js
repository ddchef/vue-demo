import Vue from 'vue'
const app = new Vue({
  el:'#app',
  data:{
    message: 'hello vue'
  },
  template: '<h1>{{message}}</h1>'
})

console.log(app)