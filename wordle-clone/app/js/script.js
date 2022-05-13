const lettersPattern = /[a-z]/
let currentGuessCount = 1
let currentGuess = document.querySelector('#guess' + currentGuessCount)
let words = ['apple', 'baker', 'store', 'horse', 'speak', 'clone', 'bread']
let solutionWord = ''

const chooseWord = () => {
   let randomItem = Math.floor(Math.random() * (words.length - 1)) + 1
   solutionWord = words[randomItem]
};
