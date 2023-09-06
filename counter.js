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
      document.querySelector('#choice2').innerHTML = `Kalla honom homofob`
    }
    if (answers[1] == 2) {
      document.querySelector('#text').innerHTML = `Ejden blir ledsen och säger att du inte får komma på hans födelsedagskalas, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Be om förlåtelse`
      document.querySelector('#choice2').innerHTML = `Spring därifrån`
    }
    if (answers[1] == 1 && answers[2] == 1) {
      document.querySelector('#text').innerHTML = `Ejden tycker synd om dig och ger dig en chokladkaka, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Ta den`
      document.querySelector('#choice2').innerHTML = `Släng bord chokladkakan`
    }
    if (answers[1] == 1 && answers[2] == 2) {
      document.querySelector('#text').innerHTML = `Ejden håller med, vad tänker du säga?`
      document.querySelector('#choice1').innerHTML = `Ring polisen`
      document.querySelector('#choice2').innerHTML = `Jag med!`
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
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 1) {
      document.querySelector('#text').innerHTML = `Ejden tackar ja och ni lever resten av era liv glada tillsammans`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 1 && answers[3] == 2) {
      document.querySelector('#text').innerHTML = `Ejden dör av förblödning, vad tänker du göra?`
      document.querySelector('#choice1').innerHTML = `Pissa på hans kropp`
      document.querySelector('#choice2').innerHTML = `Spring därifrån`
    }
    if (answers[1] == 2 && answers[2] == 2 && answers[3] == 1) {
      document.querySelector('#text').innerHTML = `Du dog`
      document.querySelector('#choice1').hidden = true
      document.querySelector('#choice2').hidden = true
    }
    if (answers[1] == 2 && answers[2] == 2 && answers[3] == 2) {
      document.querySelector('#text').innerHTML = `Du blev buddhist men hade väldigt dålig karma och får därför välja att återupplivas som en mygga eller en fluga, vad väljer du?`
      document.querySelector('#choice1').innerHTML = `Mygga`
      document.querySelector('#choice2').innerHTML = `Fluga`
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