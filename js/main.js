function makeSquares() {
  let container = document.getElementById("square-container");

  if (document.querySelectorAll(".square").length > -1) {
    removeSquares();
  }
  let numOfSquaresInput = document.getElementById("num-of-squares-across");
  let numOfSquaresWide = numOfSquaresInput.value;
  if (numOfSquaresWide < 1 || numOfSquaresWide > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  let gridSize = numOfSquaresWide * (numOfSquaresWide * .75);

  for (let i=0; i < gridSize; i++) {
    let square = document.createElement("div");
    // square.innerText = (i + 1);
    container.appendChild(square).classList.add("square");
    square.addEventListener("mouseover", function() {
      square.classList.add("drawn");
    });

    console.log(`Pushed square #${i}`);
  }

  document.getElementById("square-container").setAttribute('style', `grid-template-columns: repeat(${numOfSquaresWide}, 1fr); grid-template-rows: repeat(${numOfSquaresWide * .75}, 1fr);`);

}

function removeSquares() {
  let squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.parentNode.removeChild(square);
  }
}

function clearContainer() {
  const frame = document.getElementById("etch-a-sketch__wrapper");
  if (!frame.classList.contains("shake")) {
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
}

makeSquares();

function a11yClick(e){
  if(e.type === 'click'){
    return true;
  }
  else if(e.type === 'keypress'){
    var code = e.charCode || e.keyCode;
    if((code === 32)|| (code === 13)){
      return true;
    }
  }
  else{
    return false;
  }
}

const container = document.getElementById("square-container");
const buildGridBtn = document.getElementById("build-grid-btn");
("num-of-squares-across");
const buildGridForm = document.getElementById("build-grid-form");
const gridToggle = document.getElementById("grid-toggle");
buildGridBtn.addEventListener("keydown", function(e) {
  if (a11yClick(e)) {
    makeSquares();
  }
});
buildGridForm.addEventListener("submit", function(e) {
  e.preventDefault();
  if (a11yClick(e)) {
    makeSquares();
  }
});
gridToggle.addEventListener("click", function(e) {
  if (a11yClick(e)) {
    if (!container.classList.contains("grid-active")) {
      container.classList.add("grid-active");
      gridToggle.textContent = "Hide grid";
    } else {
      container.classList.remove("grid-active");
      gridToggle.textContent = "Show grid";
    }
  }
});
