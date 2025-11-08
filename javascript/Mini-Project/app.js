let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let button = document.querySelectorAll(".btn");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("true")
        started = true; 

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    level++;
    h2.innerText  = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    console.log(ranIdx);
    console.log(ranColor);
    console.log(ranBtn);
    gameFlash(ranBtn);
}

/*function btnPress() {
    
    userFlash(this);
}

for(btns of button){
    btns.addEventListener("click", btnPress);
}*/

