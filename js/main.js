function makeSquares(numOfSquaresWide, container) {
  let gridSize = numOfSquaresWide * (numOfSquaresWide * .75);
  document.getElementById("square-container").setAttribute('style', `grid-template-columns: repeat(${numOfSquaresWide}, 1fr); grid-template-rows: repeat((${numOfSquaresWide}, 1fr); border: 4px dotted purple;`);
  for (let i=0; i < gridSize; i++) {
    let square = document.createElement("div");
    // square.innerText = (i + 1);
    container.appendChild(square).classList.add("square");
    console.log(`Pushed square #${i}`);
  }
}

function clearContainer() {
  const frame = document.getElementById("etch-a-sketch__wrapper");
  frame.classList.add("shake");
  const drawnSquares = document.querySelectorAll(".drawn");
  for (let i=0; i < drawnSquares.length; i++) {
    let thisSquare = drawnSquares[i];
    thisSquare.classList.add("clear");
  }
  const timer = setTimeout(function(){
    frame.classList.remove("shake");
    for (let j=0; j < drawnSquares.length; j++) {
      let thisSquare = drawnSquares[j];
      thisSquare.classList.remove("drawn", "clear");
    }
    clearTimeout(timer);
  }, 3500);
}

let container = document.getElementById("square-container");
makeSquares(16, container);
let squares = document.querySelectorAll(".square");
for (let i = 0; i < squares.length; i++) {
  const square = squares[i];
  square.addEventListener("mouseover", function() {
    square.classList.add("drawn");
  });
}

let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearContainer);