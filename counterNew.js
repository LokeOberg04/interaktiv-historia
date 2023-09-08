  const textElement = document.getElementById('text')
  const optionButtonsElement = document.getElementById('option-buttons')
  import { textNodes } from './textNodes.js'
  
  let state = {}
  
  function storm() {
    if(Math.random() < 0.5) {
      console.log(Math.random())
      return 13
    } else {
      return 14
    }
  }

  function startGame() {
    state = {}
    showTextNode(1)
  }
  
  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        if(textNode.id == 12) {
          option.nextText = storm();
        }
        if(option.text == "Börja berättelsen") {
        button.style.backgroundImage = "url('/B.png')"
        button.style.height = "230px"
        button.style.width = "230px"
        }
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }
  
  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }
  
  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }
  
  
  startGame()