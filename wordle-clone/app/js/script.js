const lettersPattern = /[a-z]/
let currentGuessCount = 1
let currentGuess = document.querySelector('#guess' + currentGuessCount)
let words = ['apple', 'baker', 'store', 'horse', 'speak', 'clone', 'bread']
let solutionWord = ''

const chooseWord = () => {
   let randomItem = Math.floor(Math.random() * (words.length - 1)) + 1
   solutionWord = words[randomItem]
}

chooseWord()

document.addEventListener('keydown', (e) => {
   let keypress = e.key
   if (currentGuessCount < 7) {
      if (keypress.length == 1 && lettersPattern.test(e.key) && currentGuess.dataset.letters.length < 5) {
         updateLetters(keypress)
      } else if (e.key == 'Backspace' && currentGuess.dataset.letters != '') {
         deleteFromLetters()
      } else if (e.key == 'Enter' && currentGuess.dataset.letters.length == 5) {
         submitGuess()
      }
   }
})

const submitGuess = () => {
   for (let i = 0; i < 5; i++) {
      setTimeout(() => {
         revealTile(i, checkLetter(i))
      }, i * 200)
   }
}
