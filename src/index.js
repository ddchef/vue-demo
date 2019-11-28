import './index.css'
import Icon from './cola.png'
import printSomething from './print'
document.querySelector('body').innerText="hello word"
const image = new Image()
image.src = Icon
document.querySelector('body').append(image)
const btn = document.createElement('button')
btn.innerText = '打印数据'
btn.addEventListener('click',function(){
  printSomething()
})
document.body.append(btn)