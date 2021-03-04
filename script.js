const container = document.querySelector('.container');

let num = 1;

function createGrid() {
    
    // adds 1 square each time it runs
    const el = document.createElement('div');
    container.appendChild(el);
    el.classList.add('square');
    el.textContent = num;
    num++
}

for (var i = 1; i <= 256; ++i) {
    createGrid(i);
}

