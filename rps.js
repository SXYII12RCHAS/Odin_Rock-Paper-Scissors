
let choices = ["rock","paper","scissors"];
let player = "";
let computer;
let playerCount = computerCount = 0;
let win,draw,loose;

function Round(){
    computer = choices[Math.floor(Math.random()*choices.length)];
    win = draw = loose = false;
    
    switch(player){
        case "scissors": if(player === computer) draw = true;
        else if (computer === "rock") loose = true;
        else win = true;
        break;
        case "rock":if(player === computer) draw = true;
        else if (computer === "paper") loose = true;
        else win = true;

        break;
        case "paper":if(player === computer) draw = true;
        else if (computer === "scissors") loose = true;
        else win = true;
        break;
    }

    if(win)document.querySelector(".player-count").textContent = ++playerCount;
    else if(loose)document.querySelector(".computer-count").textContent = ++computerCount;
    else alert("Draw");




    
    
}

