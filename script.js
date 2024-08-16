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
        container.appendChild(div1);
    };
};
createGameBoard(); 

};
ticTacToeGame();