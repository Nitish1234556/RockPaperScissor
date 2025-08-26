
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgcont = document.querySelector(".msg-container");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const compfChoice = () => {
    let array = ["rock" , "paper" , "scissor"];
    let x = Math.floor(Math.random()*3);
    return array[x];
}

const drawGame = () => {
    msg.innerText = "Game is draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userPara.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compPara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = compfChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
    
}


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
})
