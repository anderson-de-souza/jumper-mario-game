
const mario = document.querySelector('.mario')

const pipe = document.querySelector('.pipe')

const jump = () => {
  
  mario.classList.add('jump')
  
  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
  
}

const loop = setInterval(() => {
  
  const pipeLeft = pipe.offsetLeft
  const marioBottom = + window.getComputedStyle(mario).bottom.replace('px', '')
  
  if (pipeLeft <= 120 && pipeLeft > 0 && marioBottom < 80) {
    
    pipe.style.animation = 'none'
    pipe.style.left = `${ pipeLeft }px`
    
    mario.style.animation = 'none'
    mario.style.bottom = `${ marioBottom }px`
    
    mario.src = './img/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '48px'
    
    clearInterval(loop)
    
  }
  
}, 25)

window.addEventListener('click', jump)
