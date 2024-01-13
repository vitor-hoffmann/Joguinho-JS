const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds1 = document.querySelector('.clouds1');
const clouds2 = document.querySelector('.clouds2');
const clouds3 = document.querySelector('.clouds3');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',' ');
    const cloud1Position = +window.getComputedStyle(clouds1).right.replace('px',' ');
    const cloud2Position = +window.getComputedStyle(clouds2).right.replace('px',' ');
    
    if (pipePosition <= 120 && marioPosition <= 120 && pipePosition > 0){
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.bottom = `${marioPosition}px`
      mario.src = './game-over.png'
      mario.style.height = '130px'
      mario.style.left = '20px'
      mario.style.animation = 'none';

      clouds1.style.animation = 'none';
      clouds1.style.right = `${cloud1Position}px`
      clouds2.style.animation = 'none';
      clouds2.style.right = `${cloud2Position}px`
      
    }
},10);

document.addEventListener('keydown', jump);