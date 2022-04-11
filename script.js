/**
 * for-loop: create divs
 * 
 */

const container = document.getElementById("container");
const dimension = 100;
const cells = [];

for (let i=0; i < dimension**2; i++) {
    cells.push(document.createElement("div"));
}

cells.forEach((cell) => {
    cell.classList.add("cell");
    cell.textContent = "#";
    container.appendChild(cell);
    cell.addEventListener('mouseover', () => cell.style.cssText = "background-color: black");
});

container.style.cssText = `grid-template-columns: repeat(${dimension}, auto)`;

