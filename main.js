import './style.css'
import javascriptLogo from '/B.png'
import viteLogo from '/vite.svg'
import { setupButtons } from './setup.js'

document.querySelector('#app').innerHTML = `
  <div>
    <atarget="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" id="alexandro" hidden />
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