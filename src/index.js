import './index.css'
import Icon from './asset/cola.png'
import printSomething from './print'
const image = new Image()
image.src = Icon
document.querySelector('body').append(image)
document.querySelector('body').append('hello word')
const btn = document.createElement('button')
btn.innerText = '按钮'
btn.addEventListener('click',function(){
  printSomething()
})
document.body.append(btn)