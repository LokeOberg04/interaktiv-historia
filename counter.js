export function setupButtons() {
  let answers = []
  function answer() {
    if (answers[0] == 1) {
      document.querySelector('#title').innerHTML = `Ejden encounter`
      document.querySelector('#text').innerHTML = `Påväg hem från skolan så träffar du en vild Ejden, han försöker krama dig, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Pussa honom på läpparna`
      document.querySelector('#choice2').innerHTML = `Slå ner honom`
    }
    if (answers[1] == 1) {
      document.querySelector('#text').innerHTML = `Ejden blir sur och slår ner dig, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Gråta`
      document.querySelector('#choice2').innerHTML = `Slå tillbaka`
    }
    if (answers[1] == 2) {
      document.querySelector('#text').innerHTML = `Ejden blir ledsen och säger att du inte får komma på hans födelsedagskalas, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Be om förlåtelse`
      document.querySelector('#choice2').innerHTML = `Spring därifrån`
    }
    if (answers[1] == 1 && answers[2] == 1) {
      document.querySelector('#text').innerHTML = `Ejden kallar dig en bitch och går därifrån, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Gå hem`
      document.querySelector('#choice2').innerHTML = `Jaga efter honom`
    }
    if (answers[1] == 1 && answers[2] == 2) {
      document.querySelector('#title').innerHTML = `Bad ending`
      document.querySelector('#text').innerHTML = `Ejden gör en episkt muay thai kick och du fucking dör`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 1) {
      document.querySelector('#text').innerHTML = `Ejden förlåter dig inte`
      document.querySelector('#choice1').innerHTML = `Fråga honom på en dejt`
      document.querySelector('#choice2').innerHTML = `Slå ner honom igen`
    }
    if (answers[1] == 2 && answers[2] == 2) {
      document.querySelector('#text').innerHTML = `Ejdens gäng skjuter dig`
      document.querySelector('#choice1').innerHTML = `Dö`
      document.querySelector('#choice2').innerHTML = `Bli buddhist`
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 1) {
      document.querySelector('#text').innerHTML = `Nu är du hemma men du är sur på Ejden, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Ignorera Ejden och fortsätt med ditt liv`
      document.querySelector('#choice2').innerHTML = `Exposa honom genom en reddit post`
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 1 && answers [4] == 1) {
      document.querySelector('#title').innerHTML = `Fegis ending`
      document.querySelector('#text').innerHTML = `Du är en fegis`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 1 && answers [4] == 2) {
      document.querySelector('#title').innerHTML = `Good ending?`
      document.querySelector('#text').innerHTML = `Redditors blev arg på Ejden pågrund av din historia och bombade hans hus, Ejden dog`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 2) {
      document.querySelector('#text').innerHTML = `Nu är du just bakom Ejden, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `bryt hans arm`
      document.querySelector('#choice2').innerHTML = `Kalla honom en fegis`
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 2 && answers[4] == 1) {
      document.querySelector('#title').innerHTML = `Bad ending`
      document.querySelector('#text').innerHTML = `Ejdens arm var en robot arm, han vänder sig om och dödar dig med ett slag`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 2 && answers[4] == 2) {
      document.querySelector('#text').innerHTML = `Ejden frågar om du vill ha en episk fight to the death, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Säg ja till fighten`
      document.querySelector('#choice2').innerHTML = `Säg ja till fighten`
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 2 && answers[4] == 2 && answers[5] == 1) {
      document.querySelector('#title').innerHTML = `Bad ending`
      document.querySelector('#text').innerHTML = `Ejden vann, du dog`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 1 && answers[2] == 1 && answers[3] == 2 && answers[4] == 2 && answers[5] == 2) {
      document.querySelector('#title').innerHTML = `Bad ending`
      document.querySelector('#text').innerHTML = `Ejden vann, du dog`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 1) {
      document.querySelector('#title').innerHTML = `Good ending`
      document.querySelector('#text').innerHTML = `Ejden tackar ja och ni lever resten av era liv glada tillsammans`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 2) {
      document.querySelector('#text').innerHTML = `Ejden dör av förblödning, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Pissa på hans kropp`
      document.querySelector('#choice2').innerHTML = `Spring hem`
    }
    if (answers[1] == 2 && answers[2] == 2 && answers[3] == 1) {
      document.querySelector('#title').innerHTML = `Bad ending`
      document.querySelector('#text').innerHTML = `Du dog`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 2 && answers[3] == 2) {
      document.querySelector('#text').innerHTML = `Du blev buddhist men hade väldigt dålig karma och får därför välja att återupplivas som en mygga eller en fluga, vad väljer du?`
      document.querySelector('#choice1').innerHTML = `Mygga`
      document.querySelector('#choice2').innerHTML = `Fluga`
    }
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 2 && answers[4] == 1) {
      document.querySelector('#title').innerHTML = `Bad ending`
      document.querySelector('#text').innerHTML = `Du pissade för länge, polisen arresterade dig`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 2 && answers[4] == 2) {
      document.querySelector('#text').innerHTML = `Du är nu hemma, men ser på nyheterna att du är eftersökt av polisen, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Fly till Albanien`
      document.querySelector('#choice2').innerHTML = `Fråga Alexandro om hjälp`
      document.querySelector('#choice2').style.backgroundImage = "url('/B.png')"
      document.querySelector('#choice2').style.height = "230px"
      document.querySelector('#choice2').style.width = "230px"
    }
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 2 && answers[4] == 2 && answers[5] == 1) {
      document.querySelector('#title').innerHTML = `Bad ending`
      document.querySelector('#text').innerHTML = `Planet krashade och du dog :c`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 2 && answers[4] == 2 && answers[5] == 2) {
      document.querySelector('#title').innerHTML = `Best ending`
      document.querySelector('#text').innerHTML = `Alexandro skrämde bort polisen så nu är du säker, han gav dig även 5 bapiljoner kronor`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 2 && answers[3] == 2 && answers[4] == 1) {
      document.querySelector('#title').innerHTML = `Bad ending?`
      document.querySelector('#text').innerHTML = `Grattis du är en Mygga`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 2 && answers[3] == 2 && answers[4] == 2) {
      document.querySelector('#title').innerHTML = `Bad ending?`
      document.querySelector('#text').innerHTML = `Grattis du är en Fluga`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
  }
  const setCounter = () => {
    document.querySelector('#choice1').innerHTML = `Börja berättelsen!`
    document.querySelector('#choice2').innerHTML = ``
  }
  document.querySelector('#choice1').addEventListener('click', () => {
    document.querySelector('#choice2').hidden = false
    answers.push(1)
    console.log(answers)
    answer()
  })
  document.querySelector('#choice2').addEventListener('click', () => {
    answers.push(2)
    console.log(answers)
    answer()
  })
  setCounter()
}
