let grade = prompt('Enter a number between 1 and 100')

if (grade >= 90 && grade <= 100) {
    document.write('You got an A')
} else if (grade >= 80 && grade <= 89) {
    document.write('You got a B')
} else if (grade >= 70 && grade <= 79) {
    document.write('You got a C')
} else if (grade >= 60 && grade <= 69) {
    document.write('You got a D')
} else if (grade < 60 && grade >= 1) {
    document.write('You got an F')
} else {
    document.write('Please only choose between 1 and 100')
}