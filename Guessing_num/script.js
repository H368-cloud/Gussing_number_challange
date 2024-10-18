let x = Math.floor((Math.random() * 100) + 1);

const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const submitBtn = document.querySelector('.submit-btn')
const result = document.querySelector('.result')
const startGameBtn = document.querySelector('.start-game')
const allGuesses = document.querySelector('.all-guesses')


const allGuessesArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputVal = parseInt(userInput.value)
    if(userInputVal < x){
        result.innerText = "To low !"
    }
    else if(userInputVal > x){
        result.innerText = "To High !"
    }
    else {
        result.innerText = " Congrates You got it !"
        startGameBtn.disabled = false
        submitBtn.disabled = true
    }
    allGuessesArray.push(userInputVal);
    allGuesses.innerText = "Your guesses are " + allGuessesArray.join(', ')
    form.reset()
})

startGameBtn.addEventListener('click', () => {
    result.innerText = ''
    allGuesses.innerText = ''
    startGameBtn.disabled = true
    submitBtn.disabled = false
    x = Math.floor((Math.random() * 100) + 1);

})
