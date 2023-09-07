  const textElement = document.getElementById('text')
  const optionButtonsElement = document.getElementById('option-buttons')
  
  let state = {}
  
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
  
  const textNodes = [
    {
      id: 1,
      text: 'Det här är en berättelse om hur våra förfäder tog sig till skolan',
      options: [
        {
          text: 'Börja berättelsen',
          nextText: 2
        },
        {
          text: 'Jag bryr mig inte',
          nextText: 3
        }
      ]
    },
    {
      id: 2,
      text: 'Vägen till skolan är 72 km, Hur tar du dig dit?',
      options: [
        {
          text: 'Gå',
          setState: { stamina: true },
          nextText: 5
        },
        {
          text: 'Spring',
          setState: { stamina: false },
          nextText: 5
        }
      ]
    },
    {
    id: 5,
      text: 'Halva vägen till skolan så ser du en liten flicka bli attakerad av en orc, Vad gör du?',
      options: [
        {
          text: 'Rädda flickan',
          requiredState: (currentState) => currentState.stamina,
          nextText: 6
        },
        {
          text: 'Fortsätt mot skolan',
          nextText: 9
        }
      ]
    },

    {

      id: 9,
        text: 'Du fortsätter mot skolan, halvväggs till skolan så finns det en stor bro men den är vaktad av en gammal man. du bestämmer dig för att gå över men du blir stoppad av gamla mannen, han säger att han kräver ett offer, vad gör du?',
        options: [
          {
            text: 'Offra flickan',
            requiredState: (currentState) => currentState.flicka,
            setState: { flicka: false },
            nextText: 10
          },
          {
            text: 'Slå ner gamla mannen',
            nextText: 11
          }
        ]
      },
      {
      id: 6,
        text: 'Orcen är 3 meter lång och ser extremt start ut, Hur ska du rädda flickan?',
        options: [
          {
            text: 'Slå ner orcen',
            nextText: 8
          },
          {
            text: 'Ta flickan och spring iväg',
            setState: { flicka: true },
            nextText: 9
          }
        ]
      },
      {
        id: 8,
          text: 'Orcen mosade dig',
          options: [
            {
              text: 'Starta om',
              nextText: 1
            }
          ]
        },

    {
      id: 3,
      text: 'Vad gör du här då?',
      options: [
        {
          text: 'Jag vet inte',
          nextText: 4
        },
        {
          text: 'Loke tvingar mig',
          nextText: 4
        },
        {
          text: 'Skojigt',
          nextText: 4
        }
      ]
    },
    {
      id: 4,
      text: '',
      options: [
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        },
        {
          text: 'ok',
          nextText: 1
        }
      ]
    }
  ]
  
  startGame()