function makeSquares(numOfSquares, container) {
  let gridSize = numOfSquares * numOfSquares;
  for (let i=0; i < gridSize; i++) {
    let square = document.createElement("div");
    // square.innerText = (i + 1);
    container.appendChild(square).classList.add("square");
    console.log(`Pushed square #${i}`);
  }
}

let container = document.getElementById("square-container");
makeSquares(16, container);

let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
  const square = squares[i];
  square.addEventListener("mouseover", function() {
    square.classList.add("hovered");
  });
}