import helloWorld from "./hello-world";
import imgsrc from './assets/cat.png';
import dogsrc from './assets/dog.jpg';
import exampleTxt from './assets/example.txt';
// import docsrc from './assets/Adocx.docx'
import './style.css'
helloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)
img.style.cssText = 'width: 600px; height: 600px'

const img2 = document.createElement('img')
img2.src = dogsrc
document.body.appendChild(img2)
img2.style.cssText = 'width: 600px; height: 600px'

const block = document.createElement('div')
block.textContent = exampleTxt
document.body.appendChild(block)
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'

document.body.classList.add('hello')