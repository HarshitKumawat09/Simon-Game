let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 500);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
//random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
}

function checkAns(idx){
    //console.log("curr level : ", level);
    //let idx = level-1;

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
        //console.log("same value");
    } else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 500);
        reset();
    }
}
function btnPress(){
    //console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
