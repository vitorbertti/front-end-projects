const lettersPattern = /[a-z]/
let currentGuessCount = 1
let currentGuess = document.querySelector('#guess' + currentGuessCount)
let words = ['apple', 'baker', 'store', 'horse', 'speak', 'clone', 'bread']
let solutionWord = ''