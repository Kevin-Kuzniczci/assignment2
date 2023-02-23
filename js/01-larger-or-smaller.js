let num1 = prompt('Select a random number between 0 and 9')
let num2 = prompt('Select another random number between 0 and 9')
if (num1 > num2) {
    document.write('Your first number choice is larger.')
} else if (num1 == num2) {
    document.write('Your choices are the same')
} else {
    document.write('Your second number choice is larger')
}