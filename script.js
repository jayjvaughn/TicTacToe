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
        div1.addEventListener("click", playerMarker);
        container.appendChild(div1);
    };
};
let player1 = "X";
let player2 = "O";
function playerMarker(e){
    clickedBox = e.target.id;
if(div1.textContent === ""){
    console.log(e.target.id);
    e.target.textContent = player1;
}
else if(div1.textContent === "" && div1.textContent !== player1){
    console.log(e.target.id);
    e.target.textContent = player2;
    };
};
createGameBoard(); 

};
ticTacToeGame();