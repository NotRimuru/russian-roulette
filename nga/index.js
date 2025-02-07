const revolver = document.getElementById("revolver");
const drum = document.getElementById("drum");
const players = document.getElementsByClassName("person");
const info = document.getElementById("info");
let infoTimeouts = [];

let winningNum = Math.floor(Math.random() * 6);
let bulletNum = -1;
function shoot(player){
    const angle = player == 0 ? -90 : 90;
    const x = player == 0 ? 45 : 55;
    revolver.style.transform = `translateX(-${x}%) translateY(-50%) rotate(${angle}deg)`;

    info.textContent = `Player ${player + 1} shot a bullet!`;
    const timeout = setTimeout(clearInfo, 1500);
    infoTimeouts.push(timeout);

    if(bulletNum > winningNum){
        if(player != 0)return;
        bulletNum = -1;
        winningNum = Math.floor(Math.random() * 6);

        return;
    }
    bulletNum ++;

    const bullets = document.getElementsByClassName("bullet");
    const bullet = bullets[bulletNum]; 
    bullet.style["opacity"] = 0.5;

    const outcome = player == 1 ? "lost" : "won";
    if(bulletNum == winningNum){
        info.textContent = `You ${outcome}!`;
        bullet.style["background-color"] = "#F00";
        return true;
    }
}

function clearInfo(){
    info.textContent = "";
    for(const timeout of infoTimeouts){
        clearTimeout(timeout);
    }
}

function resetBullets(){
    const bullets = document.getElementsByClassName("bullet");
    for(const bullet of bullets){
        bullet.style["background-color"] = "#AA0";
        bullet.style.opacity = 1;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function round(){
    for(let i = 0; i < 2; i++){
        const end = shoot(i);
        await sleep(3000);
        if(end){
            break;
        }
    }

    revolver.style.transform = "translateX(-50%) translateY(-50%)";
}

function spinDrum(){
    info.textContent = `Player 1 spun the drum!`;
    const timeout = setTimeout(clearInfo, 1500);
    infoTimeouts.push(timeout);
    winningNum = Math.floor(Math.random() * 6);
    bulletNum = -1;
    resetBullets();
}

drum.addEventListener("click", (e) => {
    spinDrum();
    e.stopPropagation();
});

revolver.addEventListener("click", () => {
    round();
});

const bulletContainer = document.getElementById("bullet-container");
for(let i = 0; i < 6; i++){
    bulletContainer.innerHTML += `<div class = "bullet"></div>`
}