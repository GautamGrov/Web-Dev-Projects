let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

//Generate Computer's Choice
const getCompChoice = () => {
    let options = ["rock", "paper", "scissors"];

    //rock , paper , scissors
    let randIndx = Math.floor(Math.random() * 3);
    return options[randIndx]
}

//Draw Game
const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "orange";
    msg.style.color = "white";
}

//show winner
const showWinner = (userWin,compChoice) => {
    if(userWin === true){
        console.log("You Win");
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";

        uScore.innerText =  ++userScore;
        
    }
    else{
        console.log("You lost");
        msg.innerText = "Computer Win, Computer's Choice was "+compChoice;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        
        cScore.innerText = ++compScore;
    }
}


const playGame = (userchoice) => {
    console.log("Users Choice is :- " + userchoice)
    const compChoice = getCompChoice();
    console.log("Computer's Choice is :- " + compChoice);
    
    if (compChoice === userchoice) {
        //draw game
        drawGame();
    } 
    else {
        let userWin = true;
        if (userchoice === "rock") {
        //comp choices = paper , scissors
        userWin = compChoice === "paper" ? false  : true // if user  = rock and comp = paper, comp will win
        } else if(userchoice === "paper"){
            //comp choices = rock , scissors
            userWin = compChoice === "scissors" ? false : true
        } else{
            // user choice scissors
            //comp choices = paper , rock
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin,compChoice);
    } 
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});
