let grid = document.querySelector('#grid-container');

//creates the divs
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
divList.forEach(item => {
    let id = item.id;
    item.addEventListener('mouseover', (e) => {
        item.classList.add('color');
    });
});

//if you want to make an eraser, do the same thing but with remove


//if you want clear, select all and remove the color class

let clearButton = document.querySelector('#clear-button');

//create event listener for clear. set it to onclick 
clearButton.addEventListener('click', (e) => {
    //for each item in divList, remove the color class
    divList.forEach(item => {
        item.classList.remove('color');
    });
    //prompt the user for a new # of squares
    let newGride = prompt('What dimensions of the new sketchbox do you want?')
});

//create slider for grid size

let slider = document.getElementById("grid-size-slider");
let output = document.getElementById("demo");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = this.value;
}