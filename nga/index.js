const revolver = document.getElementById("revolver");

const winningNum = Math.floor(Math.random() * 6);
let bulletNum = 0;
function shoot(){
    if(bulletNum == winningNum){
        revolver.textContent = "You won!";
    }
    else{
        revolver.textContent = bulletNum;
    }

    bulletNum ++;
}

revolver.addEventListener("click", () => {
    shoot();
    shoot();
});