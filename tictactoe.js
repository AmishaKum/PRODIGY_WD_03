// Game variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameEnded = false;

// Function to make a move
function makeMove(index) {
  if (!gameEnded && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (checkWin()) {
      announceWinner(currentPlayer);
      gameEnded = true;
    } else if (board.indexOf('') === -1) {
      announceDraw();
      gameEnded = true;
    } else {
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
}

// Function to check for a win
function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
}

// Function to announce the winner
function announceWinner(player) {
  alert(`Player ${player} wins!`);
}

// Function to announce a draw
function announceDraw() {
  alert("It's a draw!");
}

// Function to reset the game
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameEnded = false;
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  }
