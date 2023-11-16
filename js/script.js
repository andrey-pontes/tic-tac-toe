const clickArea = document.querySelectorAll('.area')
const root = document.querySelector(':root')
const main = document.querySelector('main')
const rulesBtn = document.getElementById('rules')
const gameOver = document.querySelector('.game-over')
let clickCount = 0
let winner = 0
let score1 = 0
let score2 = 0

//game over screen
function showWinner(winner, score1, score2, draw = false){
    gameOver.classList.remove('hidden')
    document.getElementById('play-again').classList.remove('hidden')
    rulesBtn.classList.add('hidden')
    document.getElementById('areas').classList.add('hidden')
    document.getElementById('title').innerText = 'Tic-Tac-Toe'
    console.log('executando show winner')
    if(winner == 1){
        gameOver.innerHTML = `
        <h1>Game Over!</h1>
        <div>
            <h2><span>Winner:</span> Player 1</h2>
            <img src="assets/cross.svg" alt="cross">
        </div>
        <h3>Score:</h3>
        <p>P1 - ${score1} win</p>
        <p>P2 - ${score2} win</p>
        `
    } else if(winner == 2){
        gameOver.innerHTML = `
        <h1>Game Over!</h1>
        <div>
            <h2><span>Winner:</span> Player 2</h2>
            <img src="assets/circle.svg" alt="circle">
        </div>
        <h3>Score:</h3>
        <p>P1 - ${score1} win</p>
        <p>P2 - ${score2} win</p>
        `
    } else if(draw){
        gameOver.innerHTML = `
        <h1>Game Over!</h1>
        <div>
            <img src="assets/cross.svg" alt="cross">
            <h2><span>We have a draw!</span></h2>
            <img src="assets/circle.svg" alt="circle">
        </div>
        <h3>Score:</h3>
        <p>P1 - ${score1} win</p>
        <p>P2 - ${score2} win</p>
        `
    }
}

//possible win states
function winState(){
    if(
        clickArea[0].classList.contains('cross') &&
        clickArea[1].classList.contains('cross') &&
        clickArea[2].classList.contains('cross') ||
        clickArea[0].classList.contains('cross') &&
        clickArea[3].classList.contains('cross') &&
        clickArea[6].classList.contains('cross')
    ) {
        winner = 1
        score1++
        showWinner(winner, score1, score2)
    } else if(
        clickArea[0].classList.contains('circle') &&
        clickArea[1].classList.contains('circle') &&
        clickArea[2].classList.contains('circle') ||
        clickArea[0].classList.contains('circle') &&
        clickArea[3].classList.contains('circle') &&
        clickArea[6].classList.contains('circle')
    ) {
        winner = 2
        score2++
        showWinner(winner, score1, score2)
    } else if(
        clickArea[3].classList.contains('cross') &&
        clickArea[4].classList.contains('cross') &&
        clickArea[5].classList.contains('cross') ||
        clickArea[1].classList.contains('cross') &&
        clickArea[4].classList.contains('cross') &&
        clickArea[7].classList.contains('cross')
    ) {
        winner = 1
        score1++
        showWinner(winner, score1, score2)
    } else if(
        clickArea[3].classList.contains('circle') &&
        clickArea[4].classList.contains('circle') &&
        clickArea[5].classList.contains('circle') ||
        clickArea[1].classList.contains('circle') &&
        clickArea[4].classList.contains('circle') &&
        clickArea[7].classList.contains('circle')
    ) {
        winner = 2
        score2++
        showWinner(winner, score1, score2)
    } else if(
        clickArea[6].classList.contains('cross') &&
        clickArea[7].classList.contains('cross') &&
        clickArea[8].classList.contains('cross') ||
        clickArea[2].classList.contains('cross') &&
        clickArea[5].classList.contains('cross') &&
        clickArea[8].classList.contains('cross')
    ) {
        winner = 1
        score1++
        showWinner(winner, score1, score2)
    } else if(
        clickArea[6].classList.contains('circle') &&
        clickArea[7].classList.contains('circle') &&
        clickArea[8].classList.contains('circle') ||
        clickArea[2].classList.contains('circle') &&
        clickArea[5].classList.contains('circle') &&
        clickArea[8].classList.contains('circle')
    ) {
        winner = 2
        score2++
        showWinner(winner, score1, score2)
    } else if(
        clickArea[0].classList.contains('cross') &&
        clickArea[4].classList.contains('cross') &&
        clickArea[8].classList.contains('cross') ||
        clickArea[2].classList.contains('cross') &&
        clickArea[4].classList.contains('cross') &&
        clickArea[6].classList.contains('cross')
    ) {
        winner = 1
        score1++
        showWinner(winner, score1, score2)
    } else if(
        clickArea[0].classList.contains('circle') &&
        clickArea[4].classList.contains('circle') &&
        clickArea[8].classList.contains('circle') ||
        clickArea[2].classList.contains('circle') &&
        clickArea[4].classList.contains('circle') &&
        clickArea[6].classList.contains('circle')
    ) {
        winner = 2
        score2++
        showWinner(winner, score1, score2)
    } else if(clickCount == 9 && winner == 0){
        showWinner(winner, score1, score2, true)
        console.log('empate', clickCount)
    } else {
        return
    }
    console.log('executando win state')
    console.log(winner, score1, score2)
}

function addIcon(){
    
}

//insert icons on screen
clickArea.forEach( area => {
    area.addEventListener( 'click', ()=>{
        clickCount++
        if(area.innerHTML == ''){
            if(clickCount % 2 == 0){
                area.innerHTML = '<img src="./assets/circle.svg" alt="">'
                document.getElementById('title').innerText = "Player one's turn"
                area.classList.add('circle')
            } else {
                area.innerHTML = '<img src="./assets/cross.svg" alt="cross">'
                document.getElementById('title').innerText = "Player two's turn"
                area.classList.add('cross')
            }
        } else {
            clickCount--
        }
        winState()
    })   
})

//play again button event
document.getElementById('play-again').addEventListener('click', () => {
    gameOver.classList.add('hidden')
    document.getElementById('play-again').classList.add('hidden')
    rulesBtn.classList.remove('hidden')
    document.getElementById('areas').classList.remove('hidden')
    clickArea.forEach( area => {
        area.innerHTML = ''
        area.classList.remove('cross')
        area.classList.remove('circle')
    })
    clickCount = 0
    winner = 0
})

//rules button event
rulesBtn.addEventListener('click', () => {
    const h1 = document.getElementById('title')
    const areas = document.getElementById('areas')
    const btns = document.getElementById('btns')
    const infoRules = document.querySelector('.info-rules')
    const returnToGame = document.getElementById('return-to-game')

    if(!h1.classList.contains('hidden') &&
        !areas.classList.contains('hidden') &&
        !btns.classList.contains('hidden')){
        h1.classList.toggle('hidden')
        areas.classList.toggle('hidden')
        btns.classList.toggle('hidden')
        infoRules.classList.toggle('hidden')
    }

    returnToGame.addEventListener('click', () => {
        h1.classList.remove('hidden')
        areas.classList.remove('hidden')
        btns.classList.remove('hidden')
        infoRules.classList.add('hidden')
    })
})

//themer switcher event
document.getElementById('themer-switcher').addEventListener('click', () => {
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#000')
        root.style.setProperty('--primary-color', '#090346')
        root.style.setProperty('--btn-color1', 'rgba(8, 3, 69, 0.4)')
        root.style.setProperty('--btn-color2', 'rgba(8, 3, 69, 0.1)')
        root.style.setProperty('--btn-hover1', 'rgba(8, 3, 69, 0.6)')
        root.style.setProperty('--btn-hover1', 'rgba(8, 3, 69, 0.2)')
        root.style.setProperty('--btn-hoverBg', '#0278e6')
        main.dataset.theme = 'light' 
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#1BFD9C')
        root.style.setProperty('--btn-color1', 'rgba(27, 253, 156, 0.4)')
        root.style.setProperty('--btn-color2', 'rgba(27, 253, 156, 0.1)')
        root.style.setProperty('--btn-hover1', 'rgba(27, 253, 156, 0.6)')
        root.style.setProperty('--btn-hover1', 'rgba(27, 253, 156, 0.2)')
        root.style.setProperty('--btn-hoverBg', '#82ffc9')
        main.dataset.theme = 'dark'
    }
})