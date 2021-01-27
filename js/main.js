/*
let colors = [
    'rgb(225, 0, 0)',
    'rgb(155, 255, 0)',
    'rgb(10, 125, 56)',
    'rgb(100, 0, 255)',
    'rgb(250, 59, 200)',
    'rgb(0, 150, 150)'
];
*/
// to get a color randomly
let colors = generateRandomColors(6);

let square = document.querySelectorAll(".square");

// picked initial color for displaying in the heading
//let pickedColor = colors[3];

// picked randomly color
let pickedColor = pickColor();

let displayColor = document.getElementById("displayColor");

displayColor.innerHTML = pickedColor.toUpperCase();

// viewing correct or not
let displayMessage = document.querySelector(".message");

// change to the heading color
let headColor = document.querySelector("h1");

for(let i = 0; i < square.length; i++){
    // add initial color to square
    square[i].style.backgroundColor = colors[i];

    // add click listener to square
    square[i].addEventListener("click", function(){
        // grab the color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare the color between click square and pickedColor
        if(clickedColor === pickedColor){
            // if matches, changes background color to all square
            for(let i = 0; i < square.length; i++){
                square[i].style.backgroundColor = clickedColor;
            }
            // using for()  or use a function
            // changedSquareColor(clickedColor);

            displayMessage.textContent = 'Correct !!!';
            headColor.style.backgroundColor = pickedColor;
            playButton.textContent = "Play Again!!!";
        }
        else{
            // color of the body, from css
            this.style.backgroundColor = "#3a3535";
            displayMessage.textContent = 'Try Again !!!';
        }        
    });
}

/*
// using for()  or use a function

function changedSquareColor(color){
    for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color;
    }
}
*/

// function to picked a color randomly
function pickColor(){
    let pickerNumber = Math.floor(Math.random()*colors.length);
    return colors[pickerNumber];
}


// function to get a colors randomly 
function generateRandomColors(num){
    // make an array
    let arr = [];
    // add num random colors to array
    for(let i = 0; i < num; i++){
        // get random colors and push into an array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

// function to create random colors
function randomColor(){
    // get red from 0 to 255
    let r = Math.floor(Math.random()*256);
    // get green from 0 to 255
    let g = Math.floor(Math.random()*256);
    // get blue from 0 to 255
    let b = Math.floor(Math.random()*256);
    // combine total r-g-b
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

// new Game or Play Again!!
let playButton = document.querySelector(".play");

playButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(6);
    // picked a new color
    pickedColor = pickColor();
    // change the message display color
    displayColor.textContent = pickedColor.toUpperCase();
    // changes color of square
    for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
    }
    // changes the h1 background color after matching
    headColor.style.backgroundColor = "#3a3535";
    playButton.textContent = "New Game";
});

// easy mode vs hard mode
let easyButton = document.querySelector(".easy");
let hardButtotn = document.querySelector(".hard");

easyButton.addEventListener("click", function(){
    hardButtotn.classList.remove("selected");
    easyButton.classList.add("selected");

    colors = generateRandomColors(3);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor.toUpperCase();
    headColor.style.backgroundColor = "#3a3535";
    for(let i = 0; i < square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
});
