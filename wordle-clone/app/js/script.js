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

const jumpTiles = () => {
   for (let i = 0; i < 5; i++) {
      setTimeout(() => {
         let currentTile = document.querySelector(
            '#guess' + currentGuessCount + 'Tile' + (i + 1)
         )
         currentTile.classList.add('jump')
      }, i * 200)
   }
}

const checkWin = () => {
   if (solutionWord == currentGuess.dataset.letters) {
      setTimeout(() => {
         jumpTiles()
      }, 500)
   } else {
      currentGuessCount = currentGuessCount + 1
      currentGuess = document.querySelector('#guess' + currentGuessCount)
      if (currentGuessCount == 7) {
         setTimeout(() => {
            showSolution()
         }, 500)
      }
   }
}

const checkIfGuessComplete = (i) => {
   if (i == 4) {
      checkWin();
   }
}

const showSolution = () => {
   alert('Better luck next time. The solution was: ' + solutionWord)
}

const updateLetters = (letter) => {
   let oldLetters = currentGuess.dataset.letters
   let newLetters = oldLetters + letter
   let currentTile = newLetters.length
   currentGuess.dataset.letters = newLetters
   updateTiles(currentTile, letter)
}

const updateTiles = (tileNumber, letter) => {
   let currentTile = document.querySelector(
      '#guess' + currentGuessCount + 'Tile' + tileNumber
   )
   currentTile.innerText = letter
   currentTile.classList.add('has-letter')
}

const deleteFromLetters = () => {
   let oldLetters = currentGuess.dataset.letters
   let newLetters = oldLetters.slice(0, -1)
   currentGuess.dataset.letters = newLetters
   deleteFromTiles(oldLetters.length)
}

const deleteFromTiles = (tileNumber) => {
   let currentTile = document.querySelector(
     '#guess' + currentGuessCount + 'Tile' + tileNumber
   )
   currentTile.innerText = ''
   currentTile.classList.remove('has-letter')
}

const checkLetter = (position) => {
   let guessedLetter = currentGuess.dataset.letters.charAt(position)
   let solutionLetter = solutionWord.charAt(position)

   if (guessedLetter == solutionLetter) {
     return 'correct'
   } else {
     return checkLetterExists(guessedLetter) ? 'present' : 'absent'
   }
}

const checkLetterExists = (letter) => {
   return solutionWord.includes(letter)
}
