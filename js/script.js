const dino = document.querySelector('.a002');
const background = document.querySelector('.a001');
let isJumping = false;
let position = 0

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    ;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //Descendo
        let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval);
                isJumping = false;
            } else {
                position -= 20;
                dino.style.bottom = position + 'px';
            }
        }, 20);
        } else {

        }
        position += 20;

        dino.style.bottom = position + 'px';
    }, 20);
}
function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('a003');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < - 60) {
            clearInterval(leftInterval);
            background.removedChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {

        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="a004">GAME OVER</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}
createCactus();

document.addEventListener('keyup', handleKeyUp);