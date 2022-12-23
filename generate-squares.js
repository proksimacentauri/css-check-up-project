function generateSquares(amount) {
  const squares = document.querySelector('.squares');
  for (var i = 1; i < amount; i++) {
    const contributionLevel = Math.floor(Math.random() * 4);  
    squares.insertAdjacentHTML('beforeend', `<li class="square${contributionLevel}"></li>`);
  }
}

generateSquares(365);