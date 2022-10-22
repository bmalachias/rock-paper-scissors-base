//Seleciona os botões
const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissors = document.getElementById('scissors')
const btnStart = document.getElementById('start')
const btnReset = document.getElementById('reset')
const btnAudio = document.getElementById('audio')

//Seleciona áreas da pontuação e da escolha
const displayPlayerScore = document.querySelector('.player-score')
const displayCpuScore = document.querySelector('.cpu-score')
const displayPlayerChoice = document.querySelector('.player-choice')
const displayCpuChoice = document.querySelector('.cpu-choice')

//Habilita os botões de escolha
function enableButtons() {
    btnRock.removeAttribute('disabled')
    btnPaper.removeAttribute('disabled')
    btnScissors.removeAttribute('disabled')
}

//Desabilita os botões de escolha
function disableButtons() {
    btnRock.setAttribute('disabled', true)
    btnPaper.setAttribute('disabled', true)
    btnScissors.setAttribute('disabled', true)
}

const game = new RockPaperScissors(3)
//1. Ao clicar no botão start, habilita os botões de escolha
btnStart.onclick = enableButtons
//2. Ao clicar em um botão de escolha, inicia-se um round

function displayChoiceImage(element, choice) {
    element.innerHTML = ''
    const image = document.createElement('img')
    image.setAttribute('alt', `${choice} icon`)
    image.setAttribute('src', `./assets/img/${choice}.svg`)
    element.appendChild(image)
}

//Função que inicia um novo round
function playGame(event) {
    const button = event.currentTarget
    const choice = button.getAttribute('id')
    const round = game.play(choice)

    displayChoiceImage(displayPlayerChoice, choice)
    displayChoiceImage(displayCpuChoice, round.cpuChoice)
}

//Seleciona os botões de escolha
const choiceBtns = document.getElementsByClassName('choice-button')
for(let button of choiceBtns) {
    button.onclick = playGame
}
//3. Ao iniciar um round a escolha do player e a escolha da CPU devem ser exibidas
//4. Ao fim do round a pontuação do player e a pontuação da CPU devem ser exibidas
//5. A cada round deve-se verificar se gameOver


