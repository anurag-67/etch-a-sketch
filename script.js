document.addEventListener("DOMContentLoaded",() => {

const color = document.querySelector("#color");
const slider = document.querySelector("#slider");

function createGrid(size) {
    // const gridSize = (600/size);
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < size*size; i++) {

        const cell = document.createElement('div');
        cell.classList.add("grid-cells")
        cell.style.width = `${100 / size}%`;
        cell.style.aspectRatio = "1 / 1";
        container.appendChild(cell);
    }

    colorChange(color.value)
}

function colorChange(color){
    const cells = document.querySelectorAll(".grid-cells");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = color;
        });
    });
}
    createGrid(16);

    slider.addEventListener("input",()=>{
        createGrid(slider.value);
    });


    color.addEventListener("click",()=>{
        colorChange(color.value);
    });








});


