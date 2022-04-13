function changeBoardSize() {
    const size = sizeSlider.value + "vw";
    grid.style.setProperty("width", size);
}

function changeColor() {
    const color = colorPicker.value;
    cells.forEach((cell) => cell.style.setProperty("background-color", color));
}

function createGrid(dimension=16) { // default: 16*16
    for (let i=0; i < dimension**2; i++) {
        cells.push(document.createElement("div"));
    }

    cells.forEach((cell) => {
        cell.classList.add("cell");
        cell.addEventListener('mouseover', () => {
            let currentOpacity = cell.style.getPropertyValue("opacity");
            if (currentOpacity == "") {
                currentOpacity = 0;
            }
            let newOpacity = Number(currentOpacity) + 0.1;
            cell.style.setProperty("opacity", newOpacity);
        });
        grid.appendChild(cell);
    });

    grid.style.cssText = `grid-template-columns: repeat(${dimension}, auto)`;
}

function deleteCells() {
    cells.forEach((cell) => grid.removeChild(cell));
    cells = [];
}

function erase() {
    cells.forEach((cell) => cell.style.setProperty("opacity", 0));
}

function newBoard() {
    deleteCells();
    createGrid(pixelSlider.value);
    changeBoardSize();
    changeColor();
}

let cells = [];
const board = document.getElementById("board");
const colorPicker = document.getElementById("color-picker");
const eraseBtn = document.getElementById("erase");
const grid = document.getElementById("grid");
const pixelSlider = document.getElementById("pixel-slider");
const sizeSlider = document.getElementById("size-slider");

colorPicker.addEventListener('input', changeColor)
eraseBtn.addEventListener('click', erase);
pixelSlider.addEventListener('mouseup', newBoard);
sizeSlider.addEventListener('input', changeBoardSize);

newBoard(); // initial run