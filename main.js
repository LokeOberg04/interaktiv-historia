import './style.css'
import javascriptLogo from '/B.png'
import viteLogo from '/vite.svg'
import { setupButtons } from './setup.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="title">Loke Öberg</h1>
    <p class="read-the-docs" id="text">
      syftet med den här historian är att träna på interaktiv design och även exposa ejden för sina sussiga val
    </p>
    <div class="card">
    <button id="choice1" type="button"></button>
    <button id="choice2" type="button" hidden></button>
    </div>
  </div>
`

setupButtons()