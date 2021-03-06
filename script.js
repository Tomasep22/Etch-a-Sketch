const container = document.querySelector('.container');
const clear = document.querySelector('.clear');

let num = 1;
let numSquares = 256;

function addSquare() {
    
    // adds 1 square each time it runs
    const el = document.createElement('div');
    container.appendChild(el);
    el.classList.add('square');
    el.classList.add(`square${num}`);
    num++
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseenter', addActive));
    squares.forEach(square => square.addEventListener('touchenter', addActive));
    squares.forEach(square => square.addEventListener('touchmove', addActive));
}

for (var i = 1; i <= numSquares; ++i) {
    addSquare(i);
}

function addActive() {
this.classList.add('active');
}

function newGrid(e) {
  const squares = container.querySelectorAll('.square');
  squares.forEach(square => container.removeChild(square))
  const rows = prompt('Rows', 'Input number of rows for the new grid');
  const columns = prompt('Columns', 'Input number of rows for the new grid');
  console.log(rows, columns);
  numSquares = rows * columns
  for (var i = 1; i <= numSquares; ++i) {
    addSquare(i);
    };
  document.documentElement.style.setProperty('--rows', `repeat(${rows}, 1fr)`);
  document.documentElement.style.setProperty('--columns', `repeat(${columns}, 1fr)`);
}

clear.addEventListener('click', newGrid);
    

