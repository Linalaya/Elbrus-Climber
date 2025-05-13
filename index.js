const floorForCow = document.getElementsByClassName('floor')
const cow = document.querySelector('#img')
const main = document.querySelector('.main')
const moo = document.querySelector('#moo')
const jump = document.querySelector('#jump')
const nom = document.querySelector('#omnomnom')
const flower = document.querySelector('#jpg')
const h2 = document.querySelector('#h2')
const trombone = document.querySelector('#trombone')

let position = 0
let isFinished = false
let score = 0
let randomNum
floorForCow[position].before(cow)

function playJumpSound() {
    const jumpSound = jump.cloneNode()
    jumpSound.play()
}

function randomPosition() {
    while (true) {
        randomNum = Math.floor(Math.random()*6)
        if (randomNum !== position) return randomNum
    }
}

function createFlower() {
    floorForCow[randomPosition()].before(flower)
}

function eatFlower() {
    score += 1
    document.body.append(flower)
    nom.play()
    h2.innerText = score
}

const interval = setInterval(createFlower, 800);


document.addEventListener('keydown', function(event) {
    if (event.key === 'x' && position < floorForCow.length - 1) {
        position += 1
        playJumpSound()
        floorForCow[position].before(cow)
        if (position === randomNum) eatFlower()
    }
    if (event.key === 'z' && position > 0) {
        isFinished = false
        position -= 1
        playJumpSound()
        floorForCow[position].before(cow)
        if (position === randomNum) eatFlower()
    }
    if (isFinished) {
        clearInterval(interval)
        main.style.display = 'none'
        flower.style.display = 'none'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'auto'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'contain'
        document.body.style.height = '100vh'
        if (score >= 10) {
            document.body.style.backgroundImage = 'url("./elbrus-climber-phase0/img/animals-on-the-farm-cow-clipart-md.png")'
            moo.play()
        }
        if (score < 10) {
            document.body.style.backgroundImage = 'url("./elbrus-climber-phase0/img/cow-155811_1280.webp")'
            trombone.play()
        }
    }
    if (event.key === 'x' && position === floorForCow.length-1) {
        isFinished = true
    }
    if (event.key === 'q') window.location.reload()
}
)
