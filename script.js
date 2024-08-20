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
let player1 = "X";
let player2 = "O";
let clicked = 0;
function playRound(e){
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

};
ticTacToeGame();