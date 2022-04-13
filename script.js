function changeBoardSize() {
    const size = sizeSlider.value + "vw";
    grid.style.setProperty("width", size);
}

function changeColor() {
    const color = colorPicker.value;
    cells.forEach((cell) => cell.style.setProperty("background-color", color));
}

function deleteCells() {
    cells.forEach((cell) => grid.removeChild(cell));
    cells = [];
}

function createGrid(dimension=16) { // default: 16*16
    for (let i=0; i < dimension**2; i++) {
        cells.push(document.createElement("div"));
    }

    cells.forEach((cell) => {
        cell.classList.add("cell");
        cell.addEventListener('mouseover', ()=>cell.style.setProperty("opacity", 1));
        grid.appendChild(cell);
    });

    grid.style.cssText = `grid-template-columns: repeat(${dimension}, auto)`;
}

function erase() {
    cells.forEach((cell) => cell.style.setProperty("opacity", 0));
}

const grid = document.getElementById("grid");
const board = document.getElementById("board");
const sizeSlider = document.getElementById("size-slider");
const pixelSlider = document.getElementById("pixel-slider");
const colorPicker = document.getElementById("color-picker");
const eraseBtn = document.getElementById("erase");

let cells = [];
createGrid();

sizeSlider.addEventListener('input', changeBoardSize);
pixelSlider.addEventListener('mouseup', () => {
    deleteCells();
    createGrid(pixelSlider.value);
    changeBoardSize();
});
eraseBtn.addEventListener('click', erase);
colorPicker.addEventListener('input', changeColor)