let grid = document.querySelector('#grid-container');

//creates the divs
for (let i = 1; i <= 16; i++) {
    //create new div
    const newDivs = document.createElement('div');
    newDivs.classList.add('grid-element');
    //set an id to div and the current index number
    newDivs.setAttribute('id', `div${i}`);
    grid.appendChild(newDivs);
}

//create function called changeColor that takes an argument called node ID
function changeColor(nodeID) {
    //select the node
    const node = document.getElementById(nodeID);
    //with node, toggle the class called Color
    node.classList.toggle('color');
}




//buggy stuff under this comment


//create an array for all the divs and call it divList
divList = document.querySelectorAll('.grid-element');
console.log(divList.length);
document.getElementById("div1").addEventListener("click", () => console.log('hi'))

//for each element in divList
divList.forEach(item => {
    let id = item.id;
    item.addEventListener('mouseover', (e) => {
        console.log(e);
        item.classList.toggle('color');
    });
})


/*for (let i = 0; i < divList.length; i++) {
    let currentDiv = divList[i];
    console.log(currentDiv);
    document.querySelector(currentDiv).addEventListener("click", () => console.log('hi'));
}*/


    //create a variable called divID and set it to `div${it's index#}`
    //create an event listener that acts on hover
        //event listener should call on changecolor(divID)


