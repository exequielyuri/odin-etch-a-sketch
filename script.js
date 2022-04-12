function changeBoardSize() {
    const size = sizeSlider.value + "vw";
    grid.style.setProperty("width", size);
}


const grid = document.getElementById("grid");
const board = document.getElementById("board");
const sizeSlider = document.getElementById("size-slider");

const dimension = 5;
const cells = [];
const penColor = "green";

for (let i=0; i < dimension**2; i++) {
    cells.push(document.createElement("div"));
}

cells.forEach((cell) => {
    cell.classList.add("cell");
    cell.addEventListener('mouseover', ()=>cell.style.cssText = `background-color: ${penColor}`);
    grid.appendChild(cell);
});

grid.style.cssText = `grid-template-columns: repeat(${dimension}, auto)`;

sizeSlider.addEventListener('input', changeBoardSize);