const cells= document.querySelectorAll(".cell");
let statustext= document.getElementById("status");
const restartBtn= document.getElementById("restartBtn");
let winConditions= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let options= ["","","","","","","","",""];
let currentPlayer= "X";
let running= false;
initializeGame();

function initializeGame(){
cells.forEach( cell => cell.addEventListener("click",cellClicked));
restartBtn.addEventListener("click",restartGame);
statustext.textContent= `${currentPlayer}'s turn`;
running= true;

}
function cellClicked(){
    // console.log("hello");
    const cellIndex = this.getAttribute("cellIndex");
    console.log(cellIndex);
    if(options[cellIndex]!="" || running==false){
        return;
    }
    // console.log("dbwyw")
    updateCell(this,cellIndex);

}
function updateCell(cell,index){
    console.log("hgSQHW");
    options[index]= currentPlayer;
    cell.textContent= currentPlayer;
    checkWinner();
    updatePlayer();


}
function updatePlayer(){
    if(currentPlayer=="X"){
        currentPlayer="O";
    } else{
        currentPlayer="X";
    }
    statustext.innerText=`${currentPlayer}'s turn`;
    console.log(statustext);

} 
function checkWinner(){
    console.log("check winner");
    let won=  false;
    for( let i=0;i<winConditions.length;i++){
        const condition= winConditions[i];
        console.log(condition);
        const cellA= options[condition[0]];
        const cellB= options[condition[1]];
        const cellC= options[condition[2]];
        console.log(cellA);
        console.log(cellB);
        console.log(cellC);
        if(cellA=="" || cellB=="" || cellC==""){
            continue;
        } 
        if(cellA==cellB && cellB==cellC){
            won= true;
            break;
        }
        

    }
    if(won==true){
        statustext.textContent= `${currentPlayer} wins!`;
    }else if(!options.includes("")){
        statustext.textContent = `Draw!`;
        running = false;
    }
    else{
        console.log("yaha dekho");
        // updatePlayer();
    }

}



function restartGame(){
    console.log("checking restart")
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statustext.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

