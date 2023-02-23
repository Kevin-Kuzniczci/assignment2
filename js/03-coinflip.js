let randomNumber = Math.round(Math.random() * 10)

let coinFlip = randomNumber

let choice = prompt('Heads or Tails?')

if (choice == 'Heads') {
    if (coinFlip > 3) {
        document.write('The flip was heads and you chose heads... you win!')
    } else if (coinFlip < 3){
        document.write('The flip was tails and you chose heads... you lose!')
    }
} else if (choice == 'Tails') {
    if (coinFlip < 3) {
        document.write('The flip was tails and you chose tails... you win!')
    } else if (coinFlip > 3) {
        document.write('The flip was heads and you chose tails... you lose!')
    }
} else {
    document.write('Invalid input, be sure to capitaliza the first letter and do not press the space bar.')
}