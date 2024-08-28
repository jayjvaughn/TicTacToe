// const gameBoard = {
//     gameBoardArr : [],
//     player1 : player1,
//     player2 : player2
// };
function ticTacToeGame(){

function createGameBoard(){
    const container = document.querySelector("#container");
    let boxID = 0;
    for (i = 0; i < 9; i++){
        clickedBox = div1 = document.createElement("div");
        div1.classList.add(("box"));
        div1.setAttribute("id", boxID++);
        div1.addEventListener("click", playRound);
        container.appendChild(div1);
    };
};
// ISSUES...IF YOU CLICK THE LAST BOX, NO OTHER BOX CAN BE CLICKED !!!
let clicked = 0;
function playRound(e){
let player1 = "X";
let player2 = "O";
clickedBox = e.target.id;
if(div1.textContent === "" && clicked % 2 !== 0){
    console.log(e.target.id + " was clicked");
    e.target.textContent = player1;
}
else if(div1.textContent === "" && div1.textContent !== player1 && clicked % 2 === 0){
    console.log(e.target.id + " was clicked");
    e.target.textContent = player2;
    };
};
createGameBoard(); 

function clickCounter(){
    container.addEventListener("click", ()=>{
        clicked += 1;
        console.log(clicked);
        return clicked;
    });
};
clickCounter();

submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", displayNames);

function displayNames(){
infoBar = document.querySelector(".infoBar");
player1 = document.querySelector("#playerOne");
player2 = document.querySelector("#playerTwo");

playerOneNameBox = document.createElement("div");
playerOneNameBox.classList.add("nameBox");
infoBar.appendChild(playerOneNameBox);

playerTwoNameBox = document.createElement("div");
playerTwoNameBox.classList.add("nameBox");
infoBar.appendChild(playerTwoNameBox);

playerOneNameBox.textContent = player1.value + " is using O";
playerTwoNameBox.textContent = player2.value + " is using X";;
}

// Create Game Functionality, which square pattterns = a win

};
ticTacToeGame();
