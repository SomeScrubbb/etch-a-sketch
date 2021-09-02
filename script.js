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
        console.log(e);
        item.classList.add('color');
    });
}) 

//if you want to make an eraser, do the same thing but with remove
//if you want clear, select all and remove the color class
