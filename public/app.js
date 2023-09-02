// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = ['X',"O"];
let moves=0;
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let win=false;
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    
    if(element.innerText==""){
        element.innerText=currentPlayer[(moves%2)];
        cells[index]=currentPlayer[(moves%2)];
        moves=moves+1;
    }
    
    for(const pattern of conditions){
        if(cells[pattern[0]]==cells[pattern[1]] && cells[pattern[0]]==cells[pattern[2]] && cells[pattern[0]]!=""){
            result.innerText="Player "+cells[pattern[0]]+" Won 🎉";
            win=true;
            btns.forEach(btn =>{
                btn.disabled=true;
            })
        }
    }

    if(moves==9){
        result.innerText="Draw Game";
    }


    // Your code to display the current player's turn
    if(moves!=9 && win==false){
        result.innerText="Player "+currentPlayer[moves%2]+" Turn";
    }

    // Your code to handle button and cell interactions
    
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    win=false;
    moves=0;
    cells = ['', '', '', '', '', '', '', '', ''];
    // Your code to update the 'result' element
    result.innerText="Player X Turn";

    // Your code to re-enable buttons
    btns.forEach(btn=>{
        btn.innerText="";
        btn.disabled=false;
    })
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

