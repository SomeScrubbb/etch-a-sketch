let grid = document.querySelector('#grid-container');

//creates the divs on start
for (let i = 1; i <= 256; i++) {
    //create new div
    const newDivs = document.createElement('div');
    newDivs.classList.add('grid-element');
    //set an id to div and the current index number
    newDivs.setAttribute('id', `div${i}`);
    grid.appendChild(newDivs);
}

divList = document.querySelectorAll('.grid-element');

//colors in the selected grid
function enableShading() {
    divList = document.querySelectorAll('.grid-element');
    divList.forEach(item => {
        let id = item.id;
        item.addEventListener('mouseover', (e) => {
            item.classList.add('color');
        });
    });
}

enableShading();

//if you want to make an eraser, do the same thing but with remove


//create slider for grid size

let slider = document.getElementById("grid-size-slider");
let output = document.getElementById("demo");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
let gridDimensions;
let newSquareCount = 256;
slider.oninput = function() {
    output.textContent = this.value;
    //set gridDimensions to the slider value
    gridDimensions = this.value;
    newSquareCount = Math.pow(gridDimensions, 2);
}


let currentSquareCount = 256;


let clearButton = document.querySelector('#clear-button');

//create event listener for clear. set it to onclick 
clearButton.addEventListener('click', (e) => {
    grid.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridDimensions}, 1fr)`; 
    //if there are currently more squares than the new dimensions, remove squares
    if (currentSquareCount > newSquareCount) {
        console.log(`current square count: ${currentSquareCount}`)
        console.log(`new square count: ${newSquareCount}`)
        removeSquares();
        removeColor();
    //if there are currently less squares than we want, add squares
    } else if (currentSquareCount < newSquareCount) {
        console.log(`current square count: ${currentSquareCount}`)
        console.log(`new square count: ${newSquareCount}`)
        addSquares();
        removeColor();
    } else {
        removeColor();
    }
    //set the currentSquareCount to the new amount, now that we have added squares
    currentSquareCount = newSquareCount;
    enableShading();
    /*divList.forEach(item => {
        item.classList.remove('color');
    }); */
});


function removeSquares() {
    let toRemove = currentSquareCount - newSquareCount
    while (toRemove > 0) {
            grid.removeChild(grid.lastElementChild);
            toRemove--;
    }
    //set the grid columns and rows to the new value
    grid.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridDimensions}, 1fr)`; 
}

function addSquares() {
    //create a variable that tracks the number of squares to add
    //this variable is equal to the specified dimensions minus the original dimensions
    let toAdd = newSquareCount - currentSquareCount;
    //create a variable called i which is used as the index number for the id atribute
    let i = currentSquareCount + 1;
    while (toAdd > 0) {
        const newDivs = document.createElement('div');
        newDivs.classList.add('grid-element');
        newDivs.setAttribute('id', `div${i}`);
        grid.appendChild(newDivs);
        i++;
        toAdd--;
    }
}


function removeColor () {
    divList = document.querySelectorAll('.grid-element');
    divList.forEach(item => {
        item.classList.remove('color');
    });
}

