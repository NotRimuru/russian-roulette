const revolver = document.getElementById("revolver");
const drum = document.getElementById("drum");
const players = document.getElementsByClassName("person");

let winningNum = Math.floor(Math.random() * 6);
let bulletNum = -1;
function shoot(player){
    if(bulletNum > winningNum){
        if(player != 0)return;
        bulletNum = -1;
        winningNum = Math.floor(Math.random() * 6);

        return;
    }
    bulletNum ++;
    console.log(bulletNum);

    const outcome = player == 1 ? "lost" : "won";
    if(bulletNum == winningNum){
        console.log(`You ${outcome}!`);
    }
}

function round(){
    for(let i = 0; i < 2; i++){
        shoot(i);
    }
}

function spinDrum(){
    winningNum = Math.floor(Math.random() * 6);
    bulletNum = -1;
    console.log(`Winning Number: ${winningNum}`);
}

drum.addEventListener("click", (e) => {
    spinDrum();
    e.stopPropagation();
});

revolver.addEventListener("click", () => {
    round();
});