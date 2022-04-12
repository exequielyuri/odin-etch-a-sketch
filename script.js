function changeBoardSize() {
    const size = sizeSlider.value + "vw";
    grid.style.setProperty("width", size);
}

function deleteCells() {
    cells.forEach(cell => grid.removeChild(cell));
    cells = [];
}

function createGrid(dimension=16) { // default: 16*16
    for (let i=0; i < dimension**2; i++) {
        cells.push(document.createElement("div"));
    }

    cells.forEach((cell) => {
        cell.classList.add("cell");
        cell.addEventListener('mouseover', ()=>cell.style.cssText = `opacity: 1`);
        grid.appendChild(cell);
    });

    grid.style.cssText = `grid-template-columns: repeat(${dimension}, auto)`;
}

const grid = document.getElementById("grid");
const board = document.getElementById("board");
const sizeSlider = document.getElementById("size-slider");
const pixelSlider = document.getElementById("pixel-slider");
const colorPicker = document.getElementById("color-picker");

let cells = [];
createGrid();

sizeSlider.addEventListener('input', changeBoardSize);
pixelSlider.addEventListener('mouseup', () => {
    deleteCells();
    createGrid(pixelSlider.value);
});