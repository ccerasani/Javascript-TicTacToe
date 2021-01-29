

let gameBoard = ['block_0' , '' , '' , '' , '', '' , '' , '' , ''];
const player1 = 'X';
const player2 = 'O';
const computer = 'O';

const boardContainer = document.querySelector('.play-area');


// resets the board to empty and removes occupied tag so you can play again
function resetBoard() { 
    for (let i = 0; i <= 8; i++) {
        document.querySelector('#block_' + i).innerHTML = '';
        document.querySelector('#block_' + i).classList.remove('occupied');
    };
}

var i = 0;

//fills the board with every click
function addPlayerMove() {

boardContainer.onclick = e => {
    console.log('there was a click on the board!');
    var clickMoveId = e.target.id  // e.target targets the <div that is being clicked. adding .id targets the specific id in that tag 
    document.getElementById(clickMoveId).innerHTML = 'X' // finds the element that was clicked and replaces the innerHTML value
    document.getElementById(clickMoveId).classList.add('occupied');
    i++;
    console.log(i)
    };
}; 





function hideModeButtons() {
    const button = document.querySelector('#game-mode-buttons');
    button.style.display = 'none';
    };

function showModeButtons() {
    const button = document.querySelector('#game-mode-buttons');
    button.style.display = 'flex';
};



function PlayerVsComputer() {
    console.log('reset please')
    
    
}

function PlayerVsPlayer() {
    console.log('Hey, fuck you');
    addPlayerMove();
}

function gameOver() {
    document.querySelector('#game-over #winner').style.display = 'flex';
    winner.innerText = "this is text inside the header with the id winner";
}


let blocks = document.querySelectorAll('.play-area');


// for ( ;i < 10; ) {

//     PlayerVsPlayer()
//     document.querySelector('#game-mode-buttons').style.display == 'none'  
 
//     if (document.querySelector('#block_0').innerHTML == 'X') {
//         console.log('game over!')
//         gameOver();
//     } 
    
// }
    



    // defines the conditions for a win




function playAgain() {
    console.log('you suck');
    winner.innerText = "this is text inside the header with the id winner";
    resetBoard();
}