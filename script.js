
const container = document.getElementById("gridContainer");
const totalSize = 960;

function createGrid(size) {
    container.innerHTML = ""; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const totalSize = 960;
    const squareSize = totalSize / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");

        const colors = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        div.dataset.color = randomColor;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = div.dataset.color;
        });

        container.appendChild(div);
    }
}


function resetGrid() {
    let newSize = prompt("Enter number of squares per side (max 100):", 16);
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
}

function clearColors() {
    const squares = document.querySelectorAll(".grid-item");
    squares.forEach(square => {
        square.style.backgroundColor = "rgba(0, 0, 0, 0)";
        square.dataset.opacity = 0;
    });
}

createGrid(16)

