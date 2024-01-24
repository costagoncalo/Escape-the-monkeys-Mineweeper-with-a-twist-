const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');

const totalCells = 100;
const totalBombs = 15;
const totalMonkeys = 15;
const maxScore = 10;
const bombsList = [];
const monkeysList = [];

let score = 0;

function updateScore() {
  score++;
  scoreCounter.innerText = score.toString().padStart(5, '0');

  if (score === maxScore) {
    endGame(true);
  }
}

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  
  cell.addEventListener('click', function () {
    if (bombsList.includes(i)) {
      cell.classList.add('cell-bomb');
      endGame(false);
    }
    if (monkeysList.includes(i)) {
      cell.classList.add('cell-monkey');
      endGame(false);
    }



    cell.classList.add('cell-clicked');
    updateScore();
  });
  grid.appendChild(cell);
}


while (bombsList.length < totalBombs) {
  //Generate random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * totalCells) + 1;

  if (!bombsList.includes(randomNumber)) {
    bombsList.push(randomNumber);
  }
}
while (monkeysList.length < totalMonkeys) {
  //Generate random number between 1 and 100
  const randomNumber2 = Math.floor(Math.random() * totalCells) + 1;

  if (!bombsList.includes(randomNumber2) && !monkeysList.includes(randomNumber2)) {
    monkeysList.push(randomNumber2);
  }
}



function endGame(isVictory) {
  if (isVictory) {
    endGameText.innerHTML = 'YOU<br>WON';
    endGameScreen.classList.add('win');
  }
  
  endGameScreen.classList.remove('hidden');
}

playAgainButton.addEventListener('click', function () {
  window.location.reload();
});
