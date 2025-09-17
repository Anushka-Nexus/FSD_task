let playerx = document.querySelector(".playerX")
let playero = document.querySelector(".playerO")


let gridcollection = document.querySelectorAll(".grid-child")
let currentPlayer = "X"

playerx.classList.add("activeplayer")
let winner_patterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 4, 8],
    [0, 4, 8], [2, 4, 6]
]
let board = ["", "", "", "", "", "", "", "", ""];
let store = []

let playerwin = document.querySelector(".show-winner")
let toggle_displaywinner = document.querySelector(".hide-winner-block")

let startbtn_target = document.querySelector(".start")

let time=document.querySelector(".clock")
let second;
let timer; //function jo time dikhane wala hai

//pehle pointer event none hoga
window.addEventListener("DOMContentLoaded", () => {
    gridcollection.forEach(cell => {
        cell.style.pointerEvents = "none";
    });
});
//start pr click krne k baad event auto
function startGame() {
    currentPlayer="X"
    gridcollection.forEach(cell => {
        cell.style.pointerEvents = "auto";
    });
    alert("First chance is of Player X")
    timerstart()
}

startbtn_target.addEventListener("click", startGame)

gridcollection.forEach(Item => {
    Item.addEventListener("click", (e) => {
        let move = e.target.dataset.item
        if (board[move] !== "") {
            return;
        }
        e.target.innerHTML = currentPlayer
        moves(move, currentPlayer)
        checkwinner()
        changeplayer()
        drawngame()
    })
})

function changeplayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
         playero.classList.add("activeplayer")
        playerx.classList.remove("activeplayer")

    }
    else {
        currentPlayer = "X"
        playerx.classList.add("activeplayer")
        playero.classList.remove("activeplayer")
    }
}

function moves(target, player) {
    let flagtarget = 0;
    let flagplayer = 0;
    let flagvalid = 0;
    if (target >= 0 && target < 9) {
        flagtarget = 1
    }
    if (board[target] == "X" || board[target] == "O") {
        flagplayer = 1
    }
    if (board[target] === "") {
        flagvalid = 1
    }
    if (flagtarget == 1 && flagvalid == 1) {
        //update
        board[target] = player;
        store.push({
            position: target,
            player: player
        });
    }

}

function checkwinner() {
    winner_patterns.forEach((pattern) => {

        let [ele1, ele2, ele3] = pattern
        if (board[ele1] && board[ele1] == board[ele2] && board[ele1]== board[ele3] ) {
            let winner = board[ele1]
            toggle_displaywinner.style.display = "block";
            playerwin.innerHTML = `Congratulations !The winner is Player ${winner}`
            gridcollection.forEach(cell => {
                cell.style.pointerEvents = "none";
            })
                stoptimer()
               return;
        }
    
    })

}

document.querySelector(".reset").addEventListener("click", resetGame);
function resetGame() {
    toggle_displaywinner.style.display = "none";

    // console.log(playerwin)


    board = ["", "", "", "", "", "", "", "", ""];
    store=[];
    //clean grid
    gridcollection.forEach(cell => {
        cell.innerHTML = "";
        cell.style.pointerEvents = "none";
    });
   stoptimer() //stoping timer
   second=0  //reinitialize
   updatingtimer(second) //showing initial output that is 00:00

   currentPlayer = "X";
    playerx.classList.add("activeplayer");
    playero.classList.remove("activeplayer");
  
    alert("Please click on the start button to start your game!")
   
}

function drawngame() {
    if (board.every(item =>{
       return  item!=""
    })) {
        toggle_displaywinner.style.display = "block";
        playerwin.innerHTML = `Sorry the game is drawn`
         stoptimer()
    }
   
}
 
function timerstart(){
  second =0
  updatingtimer(second) // start
  timer= setInterval(()=>{
    second++;
    updatingtimer(second);

  },1000)

}
function updatingtimer(second){
  let minutes = Math.floor(second/60) // quotient milega to min
  let sec = second%60 // remainer seconds
   
 if(minutes<10) minutes= "0"+minutes
 if(sec<10) sec="0"+sec
  time.innerHTML= `${minutes}:${sec}`

}
function stoptimer(){
  clearInterval(timer)
}


