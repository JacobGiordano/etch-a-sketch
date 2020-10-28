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